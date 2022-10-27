var Queue = function() {
  var instance = Object.create(queueMethods);
  return instance;
};

var queueMethods = {
  i: 0,
  enqueue: function (value) {
    return this[this.i++] = value;
  },
  dequeue: function () {
    var returnVal = this[0];
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


