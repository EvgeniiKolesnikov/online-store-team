import { Component } from '../../core/Component';

export class Products extends Component {
  constructor(root, options) {
    super(root, {
      name: 'Products',
      listeners: ['click'],
      ...options,
    });

    this.model = options.model;
    this.render(this.root);
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
    if (event.target.dataset.id) {
      console.log(`Кладем в карзину товар с id = ${event.target.dataset.id}`);
      this.observer.notification('add-product', { id: event.target.dataset.id });
    }
  }

  toHTML() {
    const products = this.model.getProducts().map((product) => `
        <li class="card">
          <a href="#prod/${product.id}" class="card__id">
            <img src="${product.thumbnail}" alt="" class="card__img">
            <div class="card__title">${product.title}</div>
            <div class="card__description">${product.description}</div>
          </a>
          <button class="card__btn" data-id="${product.id}">в карзину</button>
        </li>
      `);
    return `
      <ul class="products">
        ${products.join('').trim()}
      </ul>
    `;
  }
}
