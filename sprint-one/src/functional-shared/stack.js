const Stack = function() {
  let storage = {};
  _.extend(storage, stackMethods);
  return storage;
};

const stackMethods = {
  i: 0,
  push: function (value) {
    return this[this.i++] = value;
  },
  pop: function () {
    const removed = this[this.i - 1];
    delete removed;
    this.i--;
    return removed;
  },
  size: function () {
    return this.i > 0 ? this.i : 0;
  }
};