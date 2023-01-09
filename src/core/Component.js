import { DomListener } from './DomListener';

export class Component extends DomListener {
  constructor(root, options = {}) {
    super(root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
  }

  // eslint-disable-next-line class-methods-use-this
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
