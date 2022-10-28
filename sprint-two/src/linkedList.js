var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    let currentNode = Node(value);
    if (list.head === null) {
      list.head = currentNode;
    } else {
      var lastNode = list.head;
      // Don't need to while loop
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = currentNode;
    }
    list.tail = currentNode;
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    let currentNode = list.head;
    var found = false;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        found = true;
        break;
      }
      currentNode = currentNode.next;
    }
    return found;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Node = O(1);
 * LinkedList = O(1);
 * LinkList.contains = O(n);
 * LinkedList.removeHead = O(1);
 * LinkedList.addToTail = O(n);
 */
