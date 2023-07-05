var BinarySearchTree = function (value) {
  const someInstance = Object.create(BinarySearchTree.prototype);

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;

  return someInstance;
};

BinarySearchTree.prototype.insert = function (value) {
  const treeSearch = function (currentNode) {
    if (currentNode.value > value) {
      if (currentNode.left === null) {
        currentNode.left = BinarySearchTree(value);
        return;
      } else {
        treeSearch(currentNode.left);
      }
    } else if (currentNode.value < value) {
      if (currentNode.right === null) {
        currentNode.right = BinarySearchTree(value);
        return;
      } else {
        treeSearch(currentNode.right);
      }
    }
  };
  treeSearch(this);
};

BinarySearchTree.prototype.contains = function (value) {
  let isFound = false;

  const searchTree = function (currentNode) {
    if (currentNode.value === value) {
      return (isFound = true);
    }
    if (currentNode.value < value) {
      if (currentNode.right !== null) {
        searchTree(currentNode.right);
      }
    } else if (currentNode.value > value) {
      if (currentNode.left !== null) {
        searchTree(currentNode.left);
      }
    }
  };
  searchTree(this);

  return isFound;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  const iterateTree = function (currentNode) {
    cb(currentNode.value);
    if (currentNode.left === null && currentNode.right === null) {
      return;
    }
    if (currentNode.left !== null) {
      iterateTree(currentNode.left);
    }
    if (currentNode.right !== null) {
      iterateTree(currentNode.right);
    }
  };
  iterateTree(this);
};
