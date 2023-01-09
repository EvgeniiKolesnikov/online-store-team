import { ComponentOptions } from '../types/appTypes';
import { DomListener } from './DomListener';
import { Observer } from './Observer';

export class Component extends DomListener {
  public name: string;

  public observer: Observer;

  constructor(root: string | HTMLElement, options: ComponentOptions) {
    super(root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
  }

  protected init(): void {
    this.initDOMListeners();
  }

  protected destroy(): void {
    this.removeDOMListeners();
  }
}
