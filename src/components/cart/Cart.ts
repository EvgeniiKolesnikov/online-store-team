import { Component } from '../../core/Component';
import { Model } from '../../core/Model';
import { CartOptions } from '../../types/appTypes';
import { Product } from '../../types/dataTypes';

export class Cart extends Component {
  public root: string | HTMLElement;

  public model: Model;

  constructor(root: string, options: CartOptions) {
    super(root, {
      name: 'Cart',
      // listeners: ['click'],
      ...options,
    });
    this.root = root;
    this.model = options.model;
    this.render(this.root);
  }

  render(root: string): void {
    const rootNode: HTMLElement = (document.querySelector(root) as HTMLElement) || null;
    if (rootNode) {
      rootNode.innerHTML = this.toHTML();
      this.root = rootNode;
      this.init();
    }
  }

  protected init(): void {
    super.init();
    const num: HTMLElement = document.querySelector('.header__cart-num') as HTMLElement;
    const sum: HTMLElement = document.querySelector('.header__cart-sum') as HTMLElement;

    num.innerText = `${this.model.getProductCount()}`;
    sum.innerText = `$${this.model.getProductSum()}`;

    this.observer.subscribe('add-product', (product: Product) => {
      num.innerText = `${this.model.getProductCount()}`;
      sum.innerText = `$${this.model.getProductSum()}`;
    });

    this.observer.subscribe('drop-product', (product: Product) => {
      num.innerText = `${this.model.getProductCount()}`;
      sum.innerText = `$${this.model.getProductSum()}`;
    });
  }

  toHTML = (): string => (`
     <img src="cart.png" alt="Корзина" class="header__cart-img">
     <div class="header__cart-info">
        <div class="header__cart-num">0</div>
        <div class="header__cart-sum">0</div>
     </div>
    `);
}
