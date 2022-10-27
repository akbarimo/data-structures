const Stack = function() {
  this.i = 0;
};

Stack.prototype.push = function (value) {
  return this[this.i++] = value;
};
Stack.prototype.pop = function () {
  const removed = this[this.i - 1];
  delete removed;
  this.i--;
  return removed;
};
Stack.prototype.size = function() {
  return this.i > 0 ? this.i : 0;
};