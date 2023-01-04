import { ActiveRoute } from './ActiveRoute';
import { Observer } from './Observer';
import { Model } from './Model';

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Не задан селектор в роутере');
    }
    this.root = document.querySelector(selector);
    this.routes = routes;
    this.page = null;
    this.observer = new Observer();
    this.model = new Model({ observer: this.observer });
    this.changePageHandler = this.changePageHandler.bind(this);
    this.init();
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler);
    this.changePageHandler();
  }

  changePageHandler() {
    if (this.page) {
      this.page.destroy();
    }

    let Page = this.routes.index;

    if (ActiveRoute.path.includes('index')) Page = this.routes.index;
    if (ActiveRoute.path.includes('cart')) Page = this.routes.cart;
    if (ActiveRoute.path.includes('prod')) {
      Page = this.routes.prod;
      // console.log(Number(ActiveRoute.param));
      if ((Number(ActiveRoute.param) === 0) || (isNaN(Number(ActiveRoute.param)))) {
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

  destroy() {
    window.removeEventListener('hashchange', this.changePageHandler);
  }
}
