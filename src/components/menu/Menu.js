import { Component } from '../../core/Component';

export class Menu extends Component {
  constructor(root, options) {
    super(root, {
      name: 'Menu',
      listeners: ['click'],
      ...options,
    });
    this.render(root);
  }

  render(root) {
    const rootNode = document.querySelector(root);
    rootNode.innerHTML = this.toHTML();
    this.root = rootNode;
    this.init();
  }

  init() {
    super.init();
  }

  onClick(event) {
    // console.log(event.target.dataset.action);
    if (event.target.dataset.action === 'go-page-1') {
      this.observer.notification('change-page', { page: 'page_1' });
    }

    if (event.target.dataset.action === 'go-page-2') {
      this.observer.notification('change-page', { page: 'page_2' });
    }
  }

  toHTML() {
    return `
      <ul class="menu">
        <li class="menu__item" data-action="go-page-1">Страница 1</li>
        <li class="menu__item" data-action="go-page-2">Страница 2</li>
      </ul>
    `;
  }
}
