import data from '../data/products.json';

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
    this.observer.subscribe('add-product', (product) => {
      if (this.cart[product.id] === undefined) this.cart[product.id] = 0;
      this.cart[product.id]++;
      this.productCount++;
      this.productSum += this.products[product.id].price;
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
