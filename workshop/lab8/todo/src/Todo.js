import React, { Component } from 'react';
import firebase from 'firebase';

class Todo extends Component {

 constructor(props) {
   super(props)
   this.state = {
           tasks:
               [ {id:1, name:'Running'},
                 {id:2, name:'Write React program'}
               ]
           ,
           task:''
     }

   var config = {
    apiKey: "AIzaSyBooDi40EXpN0Do31OPsJetpmpifcv4wq8",
    authDomain: "todo-lab8.firebaseapp.com",
    databaseURL: "https://todo-lab8.firebaseio.com",
    projectId: "todo-lab8",
    storageBucket: "todo-lab8.appspot.com",
    messagingSenderId: "255302657359"
  };
  firebase.initializeApp(config);
   
 }

 renderTasks = () => {
   if (this.state.tasks.length !== 0)
     return this.state.tasks.map( (task,index) => {
       return (<li key={index}> {task.id}: {task.name} </li>)
     })
 }

 addTask = () => {
   let last = this.state.tasks.length
   let newTask = {id:this.state.tasks[last-1].id+1, name:this.state.task}
   this.setState({
       tasks: [...this.state.tasks, newTask]
     })
 

 }

 handleChange = (e) => this.setState({task: e.target.value})

 render() {
   return (
     <div style={{margin:'40px'}}>
       <h2>Todo: </h2>
       <input type="text" name="task" onChange={this.handleChange} />
       <button onClick={this.addTask}>Submit </button> <br/>
       { this.renderTasks() }
     </div>
   );
 }
}

export default Todo;
