import data from '../data/products.json';
import { storage } from './storage';

export class Model {
  constructor(opt = {}) {
    this.observer = opt.observer;
    this.products = data.products;
    this.cart = {};
    this.productCount = 0;
    this.productSum = 0;
    this.init();
  }

  init() {
    const storageData = storage('cart');
    if (storageData) {
      this.cart = storageData.prods;
      this.productCount = storageData.prodsCount;
      this.productSum = storageData.prodsSum;
    }

    this.observer.subscribe('add-product', (product) => {
      if (this.cart[product.id] === undefined) this.cart[product.id] = 0;
      this.cart[product.id]++;
      this.productCount++;
      this.productSum += this.products[product.id].price;
      storage('cart', { prods: this.cart, prodsCount: this.productCount, prodsSum: this.productSum });
    });
  }

  getProductID(id) {
    return this.products[id];
  }

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  getProductCount() {
    return this.productCount;
  }

  getProductSum() {
    return this.productSum;
  }
}
