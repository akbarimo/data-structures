const Queue = function() {
  this.i = 0;
};

Queue.prototype.enqueue = function (value) {
  return this[this.i++] = value;
};

Queue.prototype.dequeue = function () {
  const removed = this[0];
  delete removed;
  for (const key in this) {
    this[key - 1] = this[key];
  }
  this.i--;
  return removed;
};

Queue.prototype.size = function() {
  return this.i > 0 ? this.i : 0;
};