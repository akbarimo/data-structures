var Queue = function() {
  var someInstance = {};
  var storage = {};
  var i = 0;

  someInstance.enqueue = function(value) {
    storage[++i] = value;
  };

  someInstance.dequeue = function() {
    var returnVal = storage[1];
    delete returnVal;
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    i--;
    return returnVal;
  };

  someInstance.size = function() {
    return i > 0 ? i : 0;
  };

  return someInstance;
};