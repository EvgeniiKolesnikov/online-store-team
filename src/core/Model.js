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
}
