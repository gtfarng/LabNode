import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

class Github extends Component 
{
  	state = { user: 'gtfarng', data:''}
  	
  	componentDidMount = () => this.fetchUser(this.state.user)
  	
  	fetchUser = (USER) => 
    {
  	 	axios.get(`https://api.github.com/users/${USER}`)
  		  	 .then(response => 
           {
  				this.setState({data: response.data})
  				console.log(response.data)
  		    })
 }

  	render() 
  	{
  		const {data} = this.state
  		if (data)
  				return ( <div>
                    <h1 class='head'> Github API </h1>

        <img src={data.avatar_url} alt="avatar" width="100px"/>
                 <br/> {data.id}: {data.name} 
                   
                  </div> 
                  )
  		
          return (<div>.</div>

                  )}
}

export default Github
