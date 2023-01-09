import { ActiveRoute } from './ActiveRoute';
import { Observer } from './Observer';
import { Model } from './Model';
import { Page404 } from '../pages/Page404';
import { PageCart } from '../pages/PageCart';
import { PageIndex } from '../pages/PageIndex';
import { PageProd } from '../pages/PageProd';

interface Routes {
  index: PageIndex;
  cart: PageCart;
  prod: PageProd;
  page404: Page404;
}

type PageType = PageIndex | PageCart | PageProd | Page404;

export class Router {
  root: HTMLElement;

  routes: Routes;

  page: null | HTMLElement;

  observer: Observer;

  model: Model;

  constructor(selector: string, routes: Routes) {
    if (!selector) throw new Error('Не задан селектор в роутере');

    this.root = document.querySelector(selector) as HTMLElement;
    this.routes = routes;
    this.page = null;
    this.observer = new Observer();
    this.model = new Model({ observer: this.observer });
    this.changePageHandler = this.changePageHandler.bind(this);
    this.init();
  }

  private init(): void {
    window.addEventListener('hashchange', this.changePageHandler);
    this.changePageHandler();
  }

  private changePageHandler(): void {
    if (this.page) {
      this.page.destroy();
    }

    let Page: PageType = this.routes.index;
    if (ActiveRoute.path.includes('index')) Page = this.routes.index;
    if (ActiveRoute.path.includes('cart')) Page = this.routes.cart;
    if (ActiveRoute.path.includes('prod')) {
      Page = this.routes.prod;
      // console.log(Number(ActiveRoute.param));
      if (Number(ActiveRoute.param) === 0 || Number.isNaN(Number(ActiveRoute.param))) {
        Page = this.routes.page404;
      }
    }

    this.page = new Page(this.root, {
      observer: this.observer,
      model: this.model,
      prodID: ActiveRoute.param,
    });
    this.page.render();
    this.page.afterRender();
  }

  destroy(): void {
    window.removeEventListener('hashchange', this.changePageHandler);
  }
}
