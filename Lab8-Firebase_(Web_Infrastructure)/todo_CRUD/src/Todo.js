import React, { Component } from 'react';
import firebase from 'firebase';

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks:
                [{ id: 1, name: 'Install Cloud Switch' },
                { id: 2, name: 'Config Rounter Mikrotik' }
                ]
            ,
            task: ''
        }

        let config = {
            apiKey: "AIzaSyBiiC7F9k867oN5__G27tXz-C1iy36PpTM",
            authDomain: "gtfarng-todo.firebaseapp.com",
            databaseURL: "https://gtfarng-todo.firebaseio.com",
            projectId: "gtfarng-todo",
            storageBucket: "gtfarng-todo.appspot.com",
            messagingSenderId: "24189541663"
          };

        if (firebase.apps.length === 0) firebase.initializeApp(config)

        console.log('firebase: ', firebase.database())
        console.log('firebase: ', firebase.app().name)

        let myapp = firebase.database().ref('/');
        let tasksChild = myapp.child('/taskTable')
        tasksChild.remove()
        tasksChild.set({ tasks: this.state.tasks })
        myapp.on('value', snapshot => {
            console.log('task0: ', snapshot.val())
        });
    }

    removeTask = (id) => {
        let array = [...this.state.tasks]; // make a separate copy of the array
        let index = array.findIndex((task) => task.id === id)
        array.splice(index, 1)
        this.setState({ tasks: array })
        console.log('update states tasks:', this.state.tasks)

        let tasksChild = firebase.database()
            .ref('/')
            .child('/taskTable/tasks/' + (id - 1))
        tasksChild.remove()
            .then(() => console.log("Remove success: "))
            .catch((err) => console.log("Remove failed: " + err))
    }

    addTask = () => {
        let lastItem = this.state.tasks[this.state.tasks.length - 1]
        let newTask = { id: lastItem.id + 1, name: this.state.task }
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })

        let tasksChild = firebase.database()
            .ref('/')
            .child('/taskTable/tasks/' + lastItem.id)
        tasksChild.set(newTask)
            .then(() => console.log("Add successfully: "))
            .catch((err) => console.log("Remove failed: " + err))
    }

    editTask = (id) => {
        let index = this.state.tasks.findIndex((task) => task.id === id)
        this.setState({ task: this.state.tasks[index].name })
    }

    updateTask = (id) => {
        console.log('update states tasks:', this.state.tasks)
        let array = [...this.state.tasks]
        let index = array.findIndex((task) => task.id === id)
        array[index].name = this.state.task
        this.setState({ tasks: array })

        let tasksChild = firebase.database()
            .ref('/')
            .child('/taskTable/tasks/' + (id - 1))
        tasksChild.set({ id: array[index].id, name: this.state.task })
            .then(() => console.log("Update successfully: "))
            .catch((err) => console.log("Update failed: " + err))
    }

    handleChange = (e) => this.setState({ task: e.target.value })

    renderTasks = () => {
        if (this.state.tasks.length !== 0)
            return this.state.tasks.map((task, index) => {
                return (
                    <tr key={index}>
                        <td>{task.id}.</td>&nbsp;
                       <td><strong>Task:</strong> {task.name}</td>&nbsp; &nbsp; &nbsp;
                       <td>
                            <button class="btn btn-outline-success" onClick={() => this.editTask(task.id)}> Get</button>
                        </td>&nbsp;
                       <td>
                            <button class="btn btn-outline-warning" onClick={() => this.updateTask(task.id)}> Update</button>
                        </td>&nbsp;
                       <td>
                            <button class="btn btn-outline-danger" onClick={() => this.removeTask(task.id)}> Delete</button>
                        </td>
                    </tr>)
            })
    }

    render() {
        return (
            <div style={{ margin: '40px' }} align="center">
                <h2>Todo (CRUD) </h2><br />
                <input type="text" name="task" onChange={this.handleChange} value={this.state.task} />
                <button class="btn btn-outline-primary" onClick={this.addTask}>Add</button>
                <br /><br />
                <table >
                    { /*<thead>
                   <tr>
                       <th >ID</th>&nbsp;
                       <th>Task</th>&nbsp;
                       <th colSpan={3}>Action</th>&nbsp; 
                   </tr>
                   </thead>
                  */ }
                    <br />
                    <tbody>
                        {this.renderTasks()}
                    </tbody>
                </table>
            </div>
        );
    }
}

