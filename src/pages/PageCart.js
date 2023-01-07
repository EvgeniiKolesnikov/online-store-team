import { Page } from '../core/Page';
// import { Menu } from '../components/menu/Menu';

export class PageCart extends Page {
  constructor(root, args) {
    super(root, {
      name: 'PageCart',
      ...args,
    });
    this.observer = args.observer;
    this.model = args.model;
  }

  render() {
    const div = document.createElement('div');
    div.classList.add('page');
    div.innerHTML = this.toHTML();
    this.root.append(div);
  }

  toHTML() {
    let list = '';
    for (const key in this.model.cart) {
       list += (`<h2>Товар с id =${key} в количестве ${this.model.cart[key]} шт.</h2>`);
    }

    return `
      <header class="header">
      </header>
      <main>
       <h1>Страница корзины выбранных товаров</h1>
       <div>${list}</div>
      </main>
      <footer class="footer">
      </footer>
    `;
  }
}
