var Tree = function(value) {
  var newTree = {
    value: value,
    children: []
  };
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var isFound = false;
  const treeHasTarget = function (tree) {
    if (tree.value === target) {
      return isFound = true;
    }
    tree.children.forEach(function (item) {
      treeHasTarget(item);
    });
  };
  treeHasTarget(this);
  return isFound;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
