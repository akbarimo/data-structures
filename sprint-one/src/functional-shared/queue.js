var Queue = function() {
  var storage = {};
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  i: 0,
  enqueue: function (value) {
    return this[++this.i] = value;
  },
  dequeue: function () {
    var returnVal = this[1];
    delete returnVal;
    for (var key in this) {
      this[key - 1] = this[key];
    }
    this.i--;
    return returnVal;
  },
  size: function () {
    return this.i > 0 ? this.i : 0;
  }
};