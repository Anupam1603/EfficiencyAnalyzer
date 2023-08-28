import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ArrayComponent from './ArrayComp';
import BinaryTreeComponent from './BTreeComp';
import GraphComponent from './GraphComp';
import LinkedListComponent from './LLComp';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/array">Array</Link></li>
            <li><Link to="/binary-tree">Binary Tree</Link></li>
            <li><Link to="/graph">Graph</Link></li>
            <li><Link to="/linked-list">Linked List</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/array" component={ArrayComponent} />
          <Route path="/binary-tree" component={BinaryTreeComponent} />
          <Route path="/graph" component={GraphComponent} />
          <Route path="/linked-list" component={LinkedListComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
