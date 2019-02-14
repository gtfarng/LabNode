import React,{Component} from 'react'
import '../App.css';

class TaskList extends Component {
 render() 
 {
  	if ( this.props.tasks )
  	return (
  		<div >
  		<h1 class='head'>Todo</h1>
  		<ul> 
  	{
  	 	this.props.tasks.map((item) => (
  		<li key={item.id}>{item.task}</li>
  			))
  	}
  		</ul>
  		</div>
  		)}

}

export default TaskList