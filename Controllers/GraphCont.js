const Graph = require('../DataStructures/graph');

// Create an instance of Graph
const graph = new Graph();

function addVertex(req, res) {
  const { vertex } = req.body;
  graph.addVertex(vertex);
  res.json({ message: `Vertex ${vertex} added to graph` });
}

function addEdge(req, res) {
  const { vertex1, vertex2 } = req.body;
  graph.addEdge(vertex1, vertex2);
  res.json({ message: `Edge added between ${vertex1} and ${vertex2}` });
}

function hasVertex(req, res) {
  const { vertex } = req.params;
  const exists = graph.hasVertex(vertex);
  res.json({ exists });
}

function hasEdge(req, res) {
  const { vertex1, vertex2 } = req.params;
  const exists = graph.hasEdge(vertex1, vertex2);
  res.json({ exists });
}

module.exports = {
  addVertex,
  addEdge,
  hasVertex,
  hasEdge,
};
