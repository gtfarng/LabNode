import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUsername = (e) => this.setState({ username: e.target.value },
    console.log("Username:",this.state.username)
  )

  handleChangePassword = (e) => this.setState({ password: e.target.value },
  console.log("Password:",this.state.password)
  )


  render() {
    return (
      <div className="App" align="center">
        <header className="App-header"><br />
          <h1>My-React_APP</h1><br />
        </header>

        <br /> <h2>PSU Passport Authentication (SOAP)</h2><br />
        <form action="/" method="post" >
          USERNAME : &nbsp; <input type="text" placeholder="Username" name="username" onChange={this.handleChangeUsername} value={this.state.username} /> <br /><br />
          PASSWORD : &nbsp; <input type="password" placeholder="Password" name="password" onChange={this.handleChangePassword} value={this.state.password} /> <br /><br />
          <input type="submit" value="Submit" />
        </form>


        <br />
        <div>
          <h2>Render PSU</h2>


        </div>
      </div>
    );
  }
}


