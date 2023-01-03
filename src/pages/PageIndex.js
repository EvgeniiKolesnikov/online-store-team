import { Page } from '../core/Page';
// import { Menu } from '../components/menu/Menu';

export class PageIndex extends Page {
  constructor(root, args) {
    super(root, {
      name: 'PageIndex',
      ...args,
    });
    this.observer = args.observer;
    // this.components = {};
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
    // new Menu('nav', { observer: this.observer });
  }

  toHTML() {
    return `
  <header class="header">
  </header>
  <main class="main">
    <h1>Страница товаров с фильтрами</h1>
  </main>
  <footer class="footer">
  </footer>
  `;
  }
}
