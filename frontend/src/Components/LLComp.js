import React, { useState } from 'react';
import axios from 'axios';

function LinkedListComponent() {
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [resultAppend, setResultAppend] = useState('');
  const [resultSearch, setResultSearch] = useState('');
  const [resultDelete, setResultDelete] = useState('');
  const [resultAnalyze, setResultAnalyze] = useState('');

  const handleAppend = async () => {
    try {
      const response = await axios.post('http://localhost:3000/linked-list/append', { data: value });
      setResultAppend(response.data.message);
    } catch (error) {
      setResultAppend('Error appending value.');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/linked-list/search/${searchValue}`);
      setResultSearch(response.data.exists ? 'Value found' : 'Value not found');
    } catch (error) {
      setResultSearch('Error searching value.');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/linked-list/delete/${deleteValue}`);
      setResultDelete(response.data.message);
    } catch (error) {
      setResultDelete('Error deleting value.');
    }
  };

  const handleAnalyze = async () => {
    try {
      const response = await axios.post('http://localhost:3000/linked-list/analyze-efficiency', { dataSize: 100 });
      setResultAnalyze(`Analyze results: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setResultAnalyze('Error analyzing efficiency.');
    }
  };

  return (
    <div>
      <h2>Linked List Operations</h2>
      <div>
        <h3>Append Value</h3>
        <label>
          Value: <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <button onClick={handleAppend}>Append</button>
        <div>{resultAppend}</div>
      </div>
      <div>
        <h3>Search Value</h3>
        <label>
          Value: <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search</button>
        <div>{resultSearch}</div>
      </div>
      <div>
        <h3>Delete Value</h3>
        <label>
          Value: <input type="text" value={deleteValue} onChange={(e) => setDeleteValue(e.target.value)} />
        </label>
        <button onClick={handleDelete}>Delete</button>
        <div>{resultDelete}</div>
      </div>
      <div>
        <h3>Analyze Efficiency</h3>
        <button onClick={handleAnalyze}>Analyze Efficiency</button>
        <div>{resultAnalyze}</div>
      </div>
    </div>
  );
}

export default LinkedListComponent;
