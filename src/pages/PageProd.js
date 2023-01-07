import { Page } from '../core/Page';
import { Cart } from '../components/cart/Cart';

// import { Menu } from '../components/menu/Menu';

export class PageProd extends Page {
  constructor(root, args) {
    super(root, {
      name: 'PageProd',
      ...args,
    });
    this.observer = args.observer;
    this.model = args.model;
    this.prodID = args.prodID;
    console.log(args);
  }

  render() {
    const div = document.createElement('div');
    div.classList.add('page');
    div.innerHTML = this.toHTML();
    this.root.append(div);
    console.log(this.model);
    new Cart('.header__cart', {
      observer: this.observer,
      model: this.model,
    });
  }

  toHTML() {
    return `
      <header class="header">
        <a href="#index" class="header__logo">Online store</a>
        <a href="#cart" class="header__cart">
        </a>
      </header>
      <main class="main">
      <h1>Страница с описанием товара id ${this.prodID}</h1>
      </main>
      <footer class="footer">
      </footer>
    `;
  }
}
