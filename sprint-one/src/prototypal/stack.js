const Stack = function() {
  let instance = Object.create(stackMethods);
  return instance;
};

const stackMethods = {};

stackMethods.i = 0;

stackMethods.push = function (value) {
  return this[this.i++] = value;
};

stackMethods.pop = function () {
  const removed = this[this.i - 1];
  delete removed;
  this.i--;
  return removed;
};

stackMethods.size = function () {
  return this.i > 0 ? this.i : 0;
};