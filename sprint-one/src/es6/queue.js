class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.i = 0;
  }

  enqueue(value) {
    return this[++this.i] = value;
  }

  dequeue() {
    var returnVal = this[1];
    delete this[1];
    for (var key in this) {
      this[key - 1] = this[key];
    }
    this.i--;
    return returnVal;
  }

  size() {
    return this.i > 0 ? this.i : 0;
  }
}