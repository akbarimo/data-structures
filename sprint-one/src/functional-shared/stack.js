var Stack = function() {
  var storage = {};
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  i: 0,
  push: function (value) {
    return this[++this.i] = value;
  },
  pop: function () {
    var returnVal = this[this.i];
    delete returnVal;
    this.i--;
    return returnVal;
  },
  size: function () {
    return this.i > 0 ? this.i : 0;
  }
};