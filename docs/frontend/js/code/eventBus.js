class EventBus {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (!this.cahce[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    if (this.cache[name]) {
      const index = this.cache[name].findIndex(fn)
      this.cache[name].splice(index, 1)
    }

  }

  emit(name, once, ...args) {
    if (this.cache[name]) {
      let event = this.cache[name].slice()
      for (let fn of event) {
        fn(...args)
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}