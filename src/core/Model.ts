// import { Products } from '../components/products/Products';
import data from '../data/products.json';
import { CartType } from '../types/appTypes';
import { Product } from '../types/dataTypes';
import { Observer } from './Observer';
import { storage } from './storage';

type Opt = {
  observer?: Observer | undefined
};

export class Model {
  observer: Observer | undefined;

  products: Product[];

  cart: CartType;

  productCount: number | undefined;

  productSum: number | undefined;

  constructor(opt: Opt = { }) {
    this.observer = opt.observer;
    this.products = data.products;
    this.cart = {};
    this.productCount = 0;
    this.productSum = 0;
    this.init();
  }

  private init(): void {
    const storageData: CartType | null = storage('cart');

    if (storageData) {
      this.cart = storageData;
      this.productCount = storageData.prodsCount;
      this.productSum = storageData.prodsSum;
    }

    this.observer.subscribe('add-product', (product) => {
      if (this.cart[product.id] === undefined) this.cart[product.id] = 0;
      this.cart[product.id]++;
      this.productCount++;
      this.productSum += this.products[product.id].price;
      storage('cart', {
        prods: this.cart,
        prodsCount: this.productCount,
        prodsSum: this.productSum,
      });
    });

    this.observer.subscribe('drop-product', (product) => {
      if (this.cart[product.id] !== undefined) {
        this.productCount--;
        this.productSum -=
          this.products[product.id].price * this.cart[product.id];
        delete this.cart[product.id];
      }
      storage('cart', {
        prods: this.cart,
        prodsCount: this.productCount,
        prodsSum: this.productSum,
      });
    });
  }

  public getProductID(id: number): Product {
    return this.products[id];
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getCart(): CartType {
    return this.cart;
  }

  public getProductCount(): string {
    return this.productCount?.toString() || '';
  }

  public getProductSum(): string {
    return this.productSum?.toString() || '';
  }
}
