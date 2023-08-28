const Graph = require('../DataStructures/graph');

function analyzeEfficiency(dataSize) {
  const graph = new Graph();
  const timeTaken = [];

  for (let i = 0; i < dataSize; i++) {
    const startTime = performance.now();
    // Perform graph operations here
    const endTime = performance.now();
    timeTaken.push(endTime - startTime);
  }

  return timeTaken;
}

module.exports = {
  analyzeEfficiency,
};
