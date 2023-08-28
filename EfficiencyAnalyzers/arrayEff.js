const ArrayStructure = require('../DataStructures/array');

function analyzeEfficiency(req, res) {
  const { dataSize } = req.body;
  const array = new ArrayStructure();
  const timeTaken = [];

  for (let i = 0; i < dataSize; i++) {
    const startTime = performance.now();
    //code
    const endTime = performance.now();
    timeTaken.push(endTime - startTime);
  }

  res.json({ dataSize, timeTaken });
}

module.exports = {
  analyzeEfficiency,
};
