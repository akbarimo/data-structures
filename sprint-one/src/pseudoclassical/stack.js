var Stack = function() {
  this.i = 0;
};

Stack.prototype.push = function (value) {
  return this[++this.i] = value;
};
Stack.prototype.pop = function () {
  var returnVal = this[this.i];
  delete returnVal;
  this.i--;
  return returnVal;
};
Stack.prototype.size = function() {
  return this.i > 0 ? this.i : 0;
};