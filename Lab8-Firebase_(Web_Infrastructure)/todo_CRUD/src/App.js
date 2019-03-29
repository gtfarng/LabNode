import React, { Component } from 'react';

import './App.css'
import Todo from './Todo'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"><br />
          <h1>My-App</h1><br />
        </header>
        <div>
          <Todo />
        </div>

      </div>
    );
  }
}


