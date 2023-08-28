class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  hasVertex(vertex) {
    return this.vertices.has(vertex);
  }

  hasEdge(vertex1, vertex2) {
    return this.vertices.get(vertex1).includes(vertex2);
  }
}

module.exports = Graph;
