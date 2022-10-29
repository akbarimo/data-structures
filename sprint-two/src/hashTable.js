var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var test = false;
  if (Array.isArray(bucket)) {
    bucket.forEach(function (item, i, collection) {
      if (item.includes(k)) {
        collection[i] = [k, v];
        return test = true;
      }
    });
    if (test === false) {
      bucket.push([k, v]);
    }
  } else {
    bucket = [[k, v]];
  }
  this._storage.each(function (item, i, collection) {
    console.log(collection);
  });
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var returnVal = undefined;

  if (Array.isArray(bucket) && bucket.length > 1) {
    bucket.forEach(function (tuple, i, collection) {
      if (tuple.includes(k)) {
        returnVal = tuple[1];
      }
    });
  } else if (bucket) {
    returnVal = bucket[0][1];
  }

  return returnVal;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
Insert = O()
Retrieve = O()
Remo
 */


