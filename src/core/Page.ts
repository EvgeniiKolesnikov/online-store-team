import { DomListener } from './DomListener';

export class Page extends DomListener {
  constructor(root: string | HTMLElement, args = {}) {
    super(root, args.listeners);
    this.root = root;
    this.name = args.name || '';
    this.observer = args.observer;
  }

  // toHTML(): string {
  //   return '';
  // }

  // render(): void {
  //   throw new Error('Method "render" should be implemented');
  // }

  afterRender() {
    // console.log('afterRender()');
    this.initDOMListeners();
  }

  destroy() {
    console.log('PAGE destroy() ====================================');
    this.root.innerHTML = '';
    this.removeDOMListeners();
  }
}

// export class Component extends DomListener {
//   constructor(root, options = {}) {
//     super(root, options.listeners);
//     this.name = options.name || '';
//     this.observer = options.observer;
//   }

//   // eslint-disable-next-line class-methods-use-this
//   toHTML() {
//     return '';
//   }

//   init() {
//     this.initDOMListeners();
//   }

//   destroy() {
//     this.removeDOMListeners();
//   }
// }
