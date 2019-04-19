import React, {Component} from 'react';
import './App.css';
import Counter from './counter/App_counter'
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from "./github";

class App extends Component 
{
    state = {
    tasks: [{id: 1, task: 'Do homework'},
            {id: 2, task: 'Read book'}],
             id:3
             }
 
    addTask = (task) => 
    {
      this.setState({
      tasks: [...this.state.tasks,
             {id: this.state.id,task } ],
              id: this.state.id+1 })
    }
 
    render() 
    {
      return (
      <div className="App-header App ">
      <Counter />
     
<br/><TaskList tasks={this.state.tasks}/>
      <InputTask addTask={this.addTask} id={this.state.id}/>
      <br/>
      <br/><Github/><br/>
      <br/>
      </div>
  )}
}
export default App;