class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.i = 0;
  }

  push(value) {
    return this[++this.i] = value;
  }

  pop() {
    var returnVal = this[this.i];
    delete this[this.i];
    this.i--;
    return returnVal;
  }

  size() {
    return this.i > 0 ? this.i : 0;
  }

}