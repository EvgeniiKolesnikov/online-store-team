import data from '../data/products.json';

export class Model {
  constructor(opt = {}) {
    this.observer = opt.observer;
    this.init();
  }

  init() {
    this.observer.subscribe('event-name', () => {
      // commands
    });
  }

  getProductID(id) {
    return data.products.id;
  }

  getProducts() {
    return data.products;
  }
}
