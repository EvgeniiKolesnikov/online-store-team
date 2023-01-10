import { Page } from '../core/Page';
import { Products } from '../components/products/Products';
import { Cart } from '../components/cart/Cart';
import { PageIndexOptions, PageOptions } from '../types/appTypes';
import { Observer } from '../core/Observer';
import { Model } from '../core/Model';

export class PageIndex extends Page {
  public root: HTMLElement | string;

  public observer: Observer;

  public model: Model;

  constructor(root: HTMLElement | string, args: PageIndexOptions) {
    super(root, {
      name: 'PageIndex',
      ...args,
    });
    this.root = root;
    this.observer = args.observer;
    this.model = args.model;
  }

  render(): void {
    const div = document.createElement('div');
    div.classList.add('page__index');
    div.innerHTML = this.toHTML();
    (this.root as HTMLElement).append(div);

    const opt = {
      observer: this.observer,
      model: this.model,
    };

    // eslint-disable-next-line no-new
    new Cart('.header__cart', opt);

    // eslint-disable-next-line no-new
    new Products('.content', opt);
  }

  toHTML = (): string => `
  <header class="header">
    <a href="#index" class="header__logo">Online store</a>
    <a href="#cart" class="header__cart">Корзина
    </a>
  </header>
  <main class="main">
    <aside class="aside">
      <div class="filter-category">Фильтр категорий</div>
      <div class="filter-brand">Фильтр брендов</div>
    </aside>
    <div class="content"></div>
  </main>
  <footer class="footer">
  </footer>
  `;
}
