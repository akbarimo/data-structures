var Stack = function() {
  var someInstance = {};
  var storage = {};
  var i = 0;

  someInstance.push = function(value) {
    storage[i++] = value;
  };

  someInstance.pop = function() {
    var returnVal = storage[i - 1];
    delete returnVal;
    i--;
    return returnVal;
  };

  someInstance.size = function() {
    return i > 0 ? i : 0;
  };

  return someInstance;
};