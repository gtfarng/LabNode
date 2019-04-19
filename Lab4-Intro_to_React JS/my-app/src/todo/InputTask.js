import React, {Component} from 'react';
import '../App.css';

class InputTask extends Component {
 state = {task:''}

 handleChange = (e) => 
 {
 this.setState({ [e.target.name] : e.target.value });
 }

 render() 
 {
 return (
 <div>

 <input type="hidden" name="id" value={this.props.id} /><br/>
 <input type="text" class='textbox' placeholder='activities' name="task" onChange={this.handleChange} /><br/>
 <button class='button' onClick={() => this.props.addTask(this.state.task)}>Add</button>
 
 </div>
  		)}

}

export default InputTask