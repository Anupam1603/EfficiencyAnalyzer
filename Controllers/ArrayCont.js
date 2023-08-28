const ArrayStructure = require('../DataStructures/array');


const array = new ArrayStructure();

function insertValue(req, res) {
  const { value } = req.body;
  array.insert(value);
  res.json({ message: `Value ${value} inserted into array` });
}

function searchValue(req, res) {
  const { value } = req.params;
  const exists = array.search(Number(value));
  res.json({ exists });
}

function deleteValue(req, res) {
  const { value } = req.params;
  const deleted = array.delete(Number(value));
  res.json({ deleted });
}

module.exports = {
  insertValue,
  searchValue,
  deleteValue,
};
