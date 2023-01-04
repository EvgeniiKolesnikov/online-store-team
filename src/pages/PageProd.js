import { Page } from '../core/Page';
// import { Menu } from '../components/menu/Menu';

export class PageProd extends Page {
  constructor(root, args) {
    super(root, {
      name: 'PageProd',
      ...args,
    });
    this.observer = args.observer;
    // this.model = args.model;
    this.prodID = args.prodID;
    console.log(args);
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
   <h1>Страница с описанием товара id ${this.prodID}</h1>
  </main>
  <footer class="footer">
  </footer>
    `;
  }
}
