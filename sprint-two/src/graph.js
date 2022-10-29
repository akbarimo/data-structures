

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = new Graph(node);
  this[node].edges = [];
  this[node].value = node;
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edges.includes(this[toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(this[toNode]);
  this[toNode].edges.push(this[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  const unlinkNode = this[toNode];
  this[fromNode].edges.forEach(function(adjacent, i, collection) {
    if (adjacent.value === toNode) {
      adjacent.edges.splice(i, 1);
      unlinkNode.edges.splice(i, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function (item) {
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
Graph = O(1) ???what is time complexity of Object.create
addNode = O(1)
contains = O(1)
removeNode = O(1)
hasEdge = O(n)
addEdge = O(1)
removeEdge = O(n)
forEachNode = O(n)
 */