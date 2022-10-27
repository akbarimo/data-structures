const Stack = function() {
  const someInstance = {};
  const storage = {};
  let i = 0;

  someInstance.push = function(value) {
    storage[i++] = value;
  };

  someInstance.pop = function() {
    const removed = storage[i - 1];
    delete removed;
    i--;
    return removed;
  };

  someInstance.size = function() {
    return i > 0 ? i : 0;
  };

  return someInstance;
};