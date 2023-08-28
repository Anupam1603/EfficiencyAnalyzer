const BinaryTree = require('../DataStructures/binarytree');

function analyzeEfficiency(dataSize) {
  const binaryTree = new BinaryTree();
  const timeTaken = [];

  for (let i = 0; i < dataSize; i++) {
    const startTime = performance.now();
    //code
    const endTime = performance.now();
    timeTaken.push(endTime - startTime);
  }

  return timeTaken;
}

module.exports = {
  analyzeEfficiency,
};
