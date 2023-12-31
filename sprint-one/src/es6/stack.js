class Stack {
  constructor() {
    this.i = 0;
  }

  push(value) {
    return this[this.i++] = value;
  }

  pop() {
    const removed = this[this.i - 1];
    delete this[this.i];
    this.i--;
    return removed;
  }

  size() {
    return this.i > 0 ? this.i : 0;
  }
}