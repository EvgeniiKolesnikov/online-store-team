export class Page {
  constructor(root, args = {}) {
    this.root = root;
    this.name = args.name || '';
    this.observer = args.observer;
  }

  toHTML() {
  }

  render() {
    throw new Error('Method "render" should be implemented');
  }

  afterRender() {
    // console.log('afterRender()');
    // this.initDOMListeners();
  }

  destroy() {
    // console.log('destroy()');
    this.root.innerHTML = '';
    // this.removeDOMListeners();
  }
}
