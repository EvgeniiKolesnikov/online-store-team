function getMethodName(eventName: string): string {
  return `on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`;
}

export class DomListener {
  public root: string | HTMLElement;

  private listeners: string[];

  public name?: string;

  constructor(root: string | HTMLElement, listeners: string[] = []) {
    console.log('root =', root, 'typeof root =', typeof root);

    if (!root) {
      throw new Error('No root provided for DomListener!');
    }
    this.root = root;
    this.listeners = listeners;
  }

  protected initDOMListeners(): void {
    this.listeners.forEach((listener: string) => {
      const method: string = getMethodName(listener);
      // console.log('listener =', listener); // listener = click
      // console.log('method =', method); // method = onClick
      console.log('this =', this);
      console.log('this[method as keyof this] =', this[method as keyof this]);

      if (!this[method as keyof this]) {
        const name: string = this.name || '';
        throw new Error(
          `Method ${method} is not implemented in ${name} Component`,
        );
      }
      // this[method as keyof this] = this[method].bind(this);
      let l = () => this[method as keyof this];
      l = this[method as keyof this].bind(this);
      this.root = this.root as HTMLElement;
      this.root.addEventListener(listener, l);
    });
  };

  protected removeDOMListeners(): void {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      let l = () => this[method as keyof this];
      l = this[method as keyof this].bind(this);
      this.root = this.root as HTMLElement;
      this.root.removeEventListener(listener, l);
      // console.log('this.root.removeEventListener =', this.root);
      // console.log('this.root.removeEventListener =', this.root);
      // console.log('this.root.removeEventListener =', this.root.removeEventListener);
      // console.log('this.root.removeEventListener =', listener);
    });
  }
}
