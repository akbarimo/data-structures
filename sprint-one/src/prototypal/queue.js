const Queue = function() {
  let instance = Object.create(queueMethods);
  return instance;
};

const queueMethods = {
  i: 0,
  enqueue: function (value) {
    return this[this.i++] = value;
  },
  dequeue: function () {
    const removed = this[0];
    delete removed;
    for (const key in this) {
      this[key - 1] = this[key];
    }
    this.i--;
    return removed;
  },
  size: function () {
    return this.i > 0 ? this.i : 0;
  }
};


