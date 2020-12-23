let myIterable = {
  from: 1,
  to: 4,
}

myIterable[Symbol.iterator] = function () {
  if (this.from <= this.to) {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  } else {
    return {
      current: this.to,
      last: this.from,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  }
}
