const LinkedList = require('../DataStructures/LL');

function analyzeEfficiency(req, res) {
  const { dataSize } = req.body;
  const linkedList = new LinkedList();
  const timeTaken = [];
      const appendStartTime = performance.now();
      for (let i = 0; i < dataSize; i++) {
        linkedList.append(i);
      }
      const appendEndTime = performance.now();
      timeTaken.push(appendEndTime - appendStartTime);
    
      // Search for values in the linked list
      const searchStartTime = performance.now();
      for (let i = 0; i < dataSize; i++) {
        linkedList.search(i);
      }
      const searchEndTime = performance.now();
      timeTaken.push(searchEndTime - searchStartTime);
    
      // Delete values from the linked list
      const deleteStartTime = performance.now();
      for (let i = 0; i < dataSize; i++) {
        linkedList.delete(i);
      }
      const deleteEndTime = performance.now();
      timeTaken.push(deleteEndTime - deleteStartTime);
    
      res.json({ dataSize, timeTaken });
    }
    
    module.exports = {
      analyzeEfficiency,
    };
    