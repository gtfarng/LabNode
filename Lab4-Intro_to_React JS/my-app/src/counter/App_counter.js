import React, { Component } from 'react';
import '../App.css';

class Counter extends Component{

  state = { count:0 }
  /*
  constructor(props) 
  {
    super(props)
    //this.add = this.add.bind(this)
 }*/
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
      <div>

      <h1 class='head'>Counter</h1>
      {this.state.count}<br/>

      <br/><button class="button" onClick={this.add}>Add</button>
      <button class="button"  onClick={this.delete}>Delete</button>
      
       </div>

            )}
}

export default Counter;


