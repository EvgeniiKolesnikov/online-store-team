import { Page } from '../core/Page';
import { Products } from '../components/products/Products';

export class PageIndex extends Page {
  constructor(root, args) {
    super(root, {
      name: 'PageIndex',
      ...args,
    });
    this.observer = args.observer;
    this.model = args.model;
    // this.components = {};
  }

  render() {
    const div = document.createElement('div');
    div.classList.add('page__index');
    div.innerHTML = this.toHTML();
    this.root.append(div);
    const opt = {
      observer: this.observer,
      model: this.model,
    };
    new Products('.content', {
      observer: this.observer,
      model: this.model,
    });
  }

  toHTML() {
    return `
  <header class="header">
    <a href="#index" class="header__logo">Online store</a>
    <a href="#cart" class="header__cart">Карзина
      <div class="header__cart-num">0</div>
      <div class="header__cart-sum">0</div>
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
}
