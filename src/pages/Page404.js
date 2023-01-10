import { Page } from '../core/Page';

export class Page404 extends Page {
  constructor(root, args) {
    super(root, {
      name: 'Page404',
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
  }

  toHTML() {
    return `
  <header class="header">
  </header>
  <main class="main">
   <h1>Страница 404</h1>
  </main>
  <footer class="footer">
  </footer>
    `;
  }
}
