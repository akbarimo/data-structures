var Stack = function() {
  var instance = Object.create(stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.i = 0;

stackMethods.push = function (value) {
  return this[this.i++] = value;
};

stackMethods.pop = function () {
  var returnVal = this[this.i - 1];
  delete returnVal;
  this.i--;
  return returnVal;
};

stackMethods.size = function () {
  return this.i > 0 ? this.i : 0;
};