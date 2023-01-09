export class Observer {
  constructor() {
    this.listeners = {};
  }

  notification(eventName: string, ...args) {
    if (!Array.isArray(this.listeners[eventName])) return false;

    this.listeners[eventName].forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  subscribe(eventName: string, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter((listener) => listener !== fn);
    };
  }
}
