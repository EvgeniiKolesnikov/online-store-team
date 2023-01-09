import { Model } from '../core/Model';
import { Observer } from '../core/Observer';
import { Page } from '../core/Page';
import { PageCartAgrs } from '../types/appTypes';
// import { Menu } from '../components/menu/Menu';

export class PageCart extends Page {
  model: Model;

  observer: Observer;

  root: HTMLElement;

  constructor(root: HTMLElement, args: PageCartAgrs) {
    super(root, {
      name: 'PageCart',
      ...args,
    });
    this.observer = args.observer;
    this.model = args.model;
    this.root = root;
  }

  render(): void {
    const div = document.createElement('div');
    div.classList.add('page');
    div.innerHTML = this.toHTML();
    this.root.append(div);
  }

  toHTML(): string {
    let list = '';
    if (this.model.cart.prods) {
      list = Object.keys(this.model.cart.prods)
        .map((key) => `<div>id: ${key} count: ${this.model.cart.prods[key]}</div>`)
        .join('');
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
