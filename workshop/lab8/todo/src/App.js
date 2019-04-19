import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo ReactApp Firebase</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
