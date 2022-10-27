var Queue = function() {
  this.i = 0;
};

Queue.prototype.enqueue = function (value) {
  return this[this.i++] = value;
};

Queue.prototype.dequeue = function () {
  var returnVal = this[0];
  delete returnVal;
  for (var key in this) {
    this[key - 1] = this[key];
  }
  this.i--;
  return returnVal;
};

Queue.prototype.size = function() {
  return this.i > 0 ? this.i : 0;
};