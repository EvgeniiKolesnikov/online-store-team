import { Page } from '../core/Page';
// import { Menu } from '../components/menu/Menu';

export class PageCart extends Page {
  constructor(root, args) {
    super(root, {
      name: 'PageCart',
      ...args,
    });
    this.observer = args.observer;
    // this.model = args.model;
  }

  render() {
    const div = document.createElement('div');
    div.classList.add('page');
    div.innerHTML = this.toHTML();
    this.root.append(div);
    const opt = {
      observer: this.observer,
      model: this.model,
    };
    // new Menu('nav', opt);
  }

  toHTML() {
    return `
  <header class="header">
  </header>
  <main class="main">
   <h1>Страница корзины выбранных товаров</h1>
  </main>
  <footer class="footer">
  </footer>
    `;
  }
}
