const LinkedList = require('../DataStructures/LL');

// Create an instance of LinkedList
const linkedList = new LinkedList();

function appendValue(req, res) {
  const { value } = req.body;
  linkedList.append(value);
  res.json({ message: `Value ${value} appended to the linked list` });
}

function searchValue(req, res) {
  const { value } = req.params;
  const exists = linkedList.search(Number(value));
  res.json({ exists });
}

function deleteValue(req, res) {
  const { value } = req.params;
  linkedList.delete(Number(value));
  res.json({ message: `Value ${value} deleted from the linked list` });
}

module.exports = {
  appendValue,
  searchValue,
  deleteValue,
};
