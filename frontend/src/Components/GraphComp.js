import React, { useState } from 'react';
import axios from 'axios';

function GraphComponent() {
  const [vertex, setVertex] = useState('');
  const [vertex1, setVertex1] = useState('');
  const [vertex2, setVertex2] = useState('');
  const [resultAddVertex, setResultAddVertex] = useState('');
  const [resultAddEdge, setResultAddEdge] = useState('');
  const [resultHasVertex, setResultHasVertex] = useState('');
  const [resultHasEdge, setResultHasEdge] = useState('');

  const handleAddVertex = async () => {
    try {
      const response = await axios.post('http://localhost:3000/graph/add-vertex', { vertex });
      setResultAddVertex(response.data.message);
    } catch (error) {
      setResultAddVertex('Error adding vertex.');
    }
  };

  const handleAddEdge = async () => {
    try {
      const response = await axios.post('http://localhost:3000/graph/add-edge', { vertex1, vertex2 });
      setResultAddEdge(response.data.message);
    } catch (error) {
      setResultAddEdge('Error adding edge.');
    }
  };

  const handleHasVertex = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/graph/has-vertex/${vertex}`);
      setResultHasVertex(response.data.exists ? 'Vertex exists' : 'Vertex does not exist');
    } catch (error) {
      setResultHasVertex('Error checking vertex.');
    }
  };

  const handleHasEdge = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/graph/has-edge/${vertex1}/${vertex2}`);
      setResultHasEdge(response.data.exists ? 'Edge exists' : 'Edge does not exist');
    } catch (error) {
      setResultHasEdge('Error checking edge.');
    }
  };

  return (
    <div>
      <h2>Graph Operations</h2>
      <div>
        <h3>Add Vertex</h3>
        <label>
          Vertex: <input type="text" value={vertex} onChange={(e) => setVertex(e.target.value)} />
        </label>
        <button onClick={handleAddVertex}>Add Vertex</button>
        <div>{resultAddVertex}</div>
      </div>
      <div>
        <h3>Add Edge</h3>
        <label>
          Vertex 1: <input type="text" value={vertex1} onChange={(e) => setVertex1(e.target.value)} />
        </label>
        <label>
          Vertex 2: <input type="text" value={vertex2} onChange={(e) => setVertex2(e.target.value)} />
        </label>
        <button onClick={handleAddEdge}>Add Edge</button>
        <div>{resultAddEdge}</div>
      </div>
      <div>
        <h3>Check Vertex</h3>
        <label>
          Vertex: <input type="text" value={vertex} onChange={(e) => setVertex(e.target.value)} />
        </label>
        <button onClick={handleHasVertex}>Check Vertex</button>
        <div>{resultHasVertex}</div>
      </div>
      <div>
        <h3>Check Edge</h3>
        <label>
          Vertex 1: <input type="text" value={vertex1} onChange={(e) => setVertex1(e.target.value)} />
        </label>
        <label>
          Vertex 2: <input type="text" value={vertex2} onChange={(e) => setVertex2(e.target.value)} />
        </label>
        <button onClick={handleHasEdge}>Check Edge</button>
        <div>{resultHasEdge}</div>
      </div>
    </div>
  );
}

export default GraphComponent;
