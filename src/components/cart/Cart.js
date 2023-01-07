import { Component } from '../../core/Component';

export class Cart extends Component {
  constructor(root, options) {
    super(root, {
      name: 'Cart',
      // listeners: ['click'],
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
    const num = this.root.querySelector('.header__cart-num');
    const sum = this.root.querySelector('.header__cart-sum');

    num.innerText = this.model.getProductCount();
    sum.innerText = `${this.model.getProductSum()} $`;

    this.observer.subscribe('add-product', (product) => {
      num.innerText = this.model.getProductCount();
      sum.innerText = `${this.model.getProductSum()} $`;
    });
  }

  toHTML = () => `
     <img src="cart.png" alt="Корзина" class="header__cart-img">
     <div class="header__cart-info">
        <div class="header__cart-num">0</div>
        <div class="header__cart-sum">0</div>
     </div>
    `;
}
