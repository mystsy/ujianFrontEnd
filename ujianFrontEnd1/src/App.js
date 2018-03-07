import React, { Component } from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import Login from './components/Login.js'
import Welcome from './components/Welcome.js';

class App extends Component {

  constructor() {
		super();
		this.state = {
			name: '',
			active: 0
		}
	}
	changeName = name => this.setState({name})
	changeActive = active => this.setState({active})

  render() {

    return (

<div class="container">
    <div id="exTab3" className="container panel">	
          <ul  className="nav nav-pills">
            <li><Link to="/Login" onClick={() => this.changeActive(0)} 
						className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}>Login</Link></li>
            <li><Link to="/Welcome" onClick={() => this.changeActive(1)} 
						className={`nav-link ${this.state.active === 1 ? 'active' : ''}`}>Welcome</Link></li>
          </ul>

          <div>
            <Route exact path='/' render={() => <Redirect to='/Login'/>}/>
            <Route path='/Login' render={() => <Login changeActive={this.changeActive.bind(this)} changeName={this.changeName.bind(this)}/>}/>
            <Route path='/Welcome' render={() => <Welcome name={this.state.name}/>}/>		
          </div>
      </div>
  </div>
    );
  }
}

export default App;
