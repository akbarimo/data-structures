var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // // check if item is already inside set
  // var newKey = this['storage'];
  // if (this.contains(item)) {
  //   //   if true, return
  //   return;
  //   // else
  // } else {
  //   //  add property to set, where storage is the key and item is the value
  //   this[newKey] = item;
  // }
  // this['storage']++;
  if (!this.storage.includes(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // loop through set
  // _.each(this, function (element, i, collection) {
  //   if (element === item) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  return this.storage.includes(item);
};

setPrototype.remove = function(item) {
  // save key or index position
  // loop through set
  //   check if set[key] === value
  //      delete set[key]
  // loop through set
  //   if key > saved key
  //     decrement key
  return this.storage = this.storage.filter(function (element) {
    if (!element === item) {
      return element;
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
