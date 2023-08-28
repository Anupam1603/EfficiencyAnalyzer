const BinaryTree = require('../DataStructures/binarytree');

// Create an instance of BinaryTree
const binaryTree = new BinaryTree();

function insertValue(req, res) {
  const { value } = req.body;
  binaryTree.insert(value);
  res.json({ message: `Value ${value} inserted into binary tree` });
}

function searchValue(req, res) {
  const { value } = req.params;
  const exists = binaryTree.search(Number(value));
  res.json({ exists });
}

function deleteValue(req, res) {
  const { value } = req.params;
  binaryTree.delete(Number(value));
  res.json({ message: `Value ${value} deleted from binary tree` });
}

module.exports = {
  insertValue,
  searchValue,
  deleteValue,
};
