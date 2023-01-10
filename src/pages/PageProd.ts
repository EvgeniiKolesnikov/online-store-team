import { Page } from '../core/Page';
import { Cart } from '../components/cart/Cart';
import { PageProdOptions } from '../types/appTypes';
import { Observer } from '../core/Observer';
import { Model } from '../core/Model';
import { Product } from '../types/dataTypes';

export class PageProd extends Page {
  observer: Observer;

  model: Model;

  prodID: number;

  good: Product | null;

  constructor(root: string, args: PageProdOptions) {
    super(root, {
      name: 'PageProd',
      listeners: ['click'],
      ...args,
    });
    this.observer = args.observer;
    this.model = args.model;
    this.prodID = args.prodID;
    this.good = (
      this.model.products.filter((good: Product) => good.id === +this.prodID)[0] || null);
  }

  public render(): void {
    const div: HTMLElement | null = document.createElement('div') as HTMLElement;
    div.classList.add('page-product');
    div.innerHTML = this.toHTML();
    (<HTMLElement> this.root).append(div);
    console.log(this.good);

    const cart = new Cart('.header__cart', {
      observer: this.observer,
      model: this.model,
    });
  }

  checkCart(): boolean {
    return this.model.cart[Number(this.prodID)] !== undefined;
  }

  getButtonText(): string {
    return this.checkCart() ? 'Drop from cart' : 'Add to cart';
  }

  onClick(event: MouseEvent): void {
    // click photos
    const elem = event.target as HTMLElement;

    if (elem && elem.matches('.product-photo-slide')) {
      const slide = event.target as HTMLImageElement;
      const bigPhoto = document.querySelector('.product-photo-big') as HTMLImageElement;
      if (slide && bigPhoto) {
        bigPhoto.src = slide.src;
      }
    }

    // click "add to cart" button
    if ((elem).matches('.product-button-add') && this.good) {
      if (this.checkCart()) {
        console.log('Good already in cart. DROP from cart');
        this.observer.notification('drop-product', { id: this.good.id });
      } else {
        console.log('ADD to cart');
        this.observer.notification('add-product', { id: this.good.id });
      }
      elem.textContent = this.getButtonText();
    }

    // click "buy now" button
    if (elem.matches('.product-button-buy') && this.good) {
      if (this.checkCart()) {
        console.log('Good already in cart. Buy now');
      } else {
        console.log('Buy now. Add to cart');
        this.observer.notification('add-product', { id: this.good.id });
      }
      (<HTMLElement>document.querySelector('.product-button-add')).textContent = this.getButtonText();
    }
  }

  toHTML() {
    if (!this.good) return '';

    return `
      <header class="header">
        <a href="#index" class="header__logo">Online store</a>
        <a href="#cart" class="header__cart">
        </a>
      </header>
      <main class="main">
      <div class="product-details">
        <div class="product-path">
          <a class="product-store" href="/">store</a>
          <div class="product-space"> >> </div>
          <a class="product-category">${this.good.category.toLowerCase()}</a>
          <div class="product-space"> >> </div>
          <a class="product-brand">${this.good.brand.toLowerCase()}</a>
          <div class="product-space"> >> </div>
          <a class="product-title">${this.good.title.toLowerCase()}</a>
        </div>

        <div class="product-about">
          <div class="product-about-title">
          ${this.good.title.toLowerCase()}
          </div>
          <div class="product-data">

            <div class="product-photos">
              <div class="product-photo-slides">
              ${this.good.images.map((image) => `<img class="product-photo-slide" alt="" src="${image}">`).join('')}
              </div>
              <img class="product-photo-big" alt="" src="${this.good.images[0]}">
            </div>


            <div class="product-info">
              <div class="product-info-item">
                <div class="product-info-title">Description</div>
                <div class="product-info-text">${this.good.description}</div>
              </div>
              <div class="product-info-item">
                <div class="product-info-title">Discount Percentage</div>
                <div class="product-info-text">${this.good.discountPercentage}</div>
              </div>
              <div class="product-info-item">
                <div class="product-info-title">Rating</div>
                <div class="product-info-text">${this.good.rating}</div>
              </div>
              <div class="product-info-item">
                <div class="product-info-title">Stock</div>
                <div class="product-info-text">${this.good.stock}</div>
              </div>
              <div class="product-info-item">
                <div class="product-info-title">Brand</div>
                <div class="product-info-text">${this.good.brand}</div>
              </div>
              <div class="product-info-item">
                <div class="product-info-title">Category</div>
                <div class="product-info-text">${this.good.category}</div>
              </div>
            </div>


            <div class="product-buttons">
              <div class="product-price">$${this.good.price}</div>
              <div class="product-button-add product-button">${this.getButtonText()}</div>
              <a href="#cart" class="product-button-buy product-button">Buy now</a>
            </div>

          </div>
        </div>

      </div>
      </main>
      <footer class="footer">
      </footer>
    `;
  }
}
