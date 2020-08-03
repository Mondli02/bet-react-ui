import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import {Switch, Route, BrowserRouter, Link } from 'react-router-dom'

//routing.....
import Home from '../views/Home';
import Register from '../views/Register';
import Login from '../views/Login';
import Tournament from '../views/Tournament';

let token = localStorage.getItem('token');    
class App extends Component {

  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/');}

  ShowLogin(){
    let loginorlogout = <Link className="nav-link" to='/login'>Login</Link>
    if(token){
      loginorlogout = <a className="nav-link" href="#" onClick={this.logout}>Logout</a>
    }
    return loginorlogout;
  }

  logout(){
    localStorage.removeItem('token');
   
  }
  showRegisterOrTournament(){
    let registerOrPost = <Link className="nav-link" to='/register'>Register</Link>;
    if(token){
      registerOrPost = <Link className="nav-link" to='/tournament'>Products</Link>;
    }
    return registerOrPost;
  }
  render(){
  return (
   <div>
        <div className="header"> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto container">
								<li className="nav-item active">	
                    <Link className="nav-link" to ='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    {this.showRegisterOrTournament()}	
                    </li>
                    <li className="nav-item">
                    {this.ShowLogin()}	
                    </li>
                </ul>
              </div>
            </nav>
        </div>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} /> {/* domain reference*/}
          <Route exact path="/register" component={Register} /> {/* domain reference/register*/}
          <Route path="/login" component={Login} />
          <Route path="/tournament" component={Tournament} />
        </Switch>
        </div>
        <br/> <br/>
        <div className="container">
          <h6>Footer</h6>
        </div>


   </div>
  );
}
}

export default App;
