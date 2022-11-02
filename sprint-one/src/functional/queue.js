const Queue = function() {
  const someInstance = {};
  const storage = {};
  let i = 0;

  someInstance.enqueue = function(value) {
    storage[i++] = value;
  };

  someInstance.dequeue = function() {
    const removed = storage[0];
    delete removed;
    for (const key in storage) {
      storage[key - 1] = storage[key];
    }
    i--;
    return removed;
  };

  someInstance.size = function() {
    return i > 0 ? i : 0;
  };

  return someInstance;
};

// we want to utilize a start and end property