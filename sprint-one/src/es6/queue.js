class Queue {
  constructor() {
    this.i = 0;
  }

  enqueue(value) {
    return this[this.i++] = value;
  }

  dequeue() {
    const removed = this[0];
    delete this[0];
    for (const key in this) {
      this[key - 1] = this[key];
    }
    this.i--;
    return removed;
  }

  size() {
    return this.i > 0 ? this.i : 0;
  }
}