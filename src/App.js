import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main div">
        <div className="centre div">
          <br />
          <h1>To Do List</h1>
          <h2>By Abhinov007</h2>
          <input type="text" placeholder="Add Items"/>
          <button> + </button>

        <ol>
          <li></li>
        </ol>
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
