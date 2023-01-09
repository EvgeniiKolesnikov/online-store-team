import { Component } from '../../core/Component';
import { Model } from '../../core/Model';
import { Observer } from '../../core/Observer';
import { ProductOptions } from '../../types/appTypes';
import { Product } from '../../types/dataTypes';

export class Products extends Component {
  public root: string | HTMLElement;

  public rootNode: HTMLElement | null | undefined;

  public observer: Observer;

  public model: Model;

  constructor(root: string, options: ProductOptions) {
    super(root, {
      name: 'Products',
      listeners: ['click'],
      ...options,
    });
    this.root = root;
    this.observer = options.observer;
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
  }

  onClick(event: MouseEvent): void {
    // onClick = (event: MouseEvent): void => {
    // console.log(typeof event.target.dataset.id);
    if (event.target as HTMLElement) {
      const target: HTMLElement = event.target as HTMLElement;

      if (target?.dataset?.id) {
        console.log(`Add good to cart. ProdId = ${target?.dataset?.id}`);
        this.observer.notification('add-product', {
          id: +target.dataset.id,
        });
      }
    }
  }

  protected toHTML = (): string => (
    `<ul class="products">
      ${this.model.getProducts().map((product: Product): string => (
      `<li class="card">
          <a href="#prod/${product.id}" class="card__id">
            <img src="${product.thumbnail}" alt="" class="card__img">
            <div class="card__title">${product.title}</div>
            <div class="card__description">${product.description}</div>
          </a>
          <button class="card__btn" data-id="${product.id}">в карзину</button>
        </li>`)).join('').trim()}
      </ul>`);
}
