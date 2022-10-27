class Stack {
  constructor() {
    this.i = 0;
  }

  push(value) {
    return this[this.i++] = value;
  }

  pop() {
    var returnVal = this[this.i - 1];
    delete this[this.i];
    this.i--;
    return returnVal;
  }

  size() {
    return this.i > 0 ? this.i : 0;
  }
}