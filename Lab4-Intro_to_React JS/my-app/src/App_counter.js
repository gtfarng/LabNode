import React, { Component } from 'react';
import './App.css';

class App extends Component 
{
  state = { count:0 }
  
  constructor(props) 
  {
    super(props)
    //this.add = this.add.bind(this)
 }
   /*
   add = function() 
  {
    this.setState({count:this.state.count+1})
  }
*/

  add = () =>
  {
    this.setState({count:this.state.count+1})
  }

/*
   delete = function() 
  {
    this.setState({count:this.state.count-1})
  }
*/
   
   delete = () =>
  {
    this.setState({count:this.state.count-1})
  }

  render() 
  {
    return (
      <div className="App">
      <h1>Counter</h1>
      {this.state.count} <br/>
      <br></br>
      <button onClick={this.add}>Add</button>
      <button onClick={this.delete}>Delete</button>
       </div>
            );
    }
}

export default App;


