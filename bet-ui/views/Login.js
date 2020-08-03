import React, { Component } from 'react';
import axiosApi from './../axiosConfig';
import qs from 'qs';
let $this;
class Login extends Component{
    constructor(props){
        super(props);

        this.state = {email:'', password:''}
        $this=this;
    }
    //Handle changes in the view - set State 
    //Handle changes in the view - set State 
   
    handleEmailChange(e){
        $this.setState({
           email: e.target.value 
        })
    }
    handlePasswordChange(e){
        $this.setState({
            password: e.target.value     
    })
    }
    saveRegister(e){
        e.preventDefault(); //prevent refresh

        const user = {email:$this.state.email, password:$this.state.password}

        // send ajax with axio 
		axiosApi.post("auth/login", qs.stringify(user)).then((res) => {                        
            
            // here we go// success login
            if(res.data.auth == true){
                // store in localStorage
                localStorage.setItem('token', res.data.token);
                
                // set axios header
                axiosApi.defaults.headers.common['x-access-token'] = res.data.token;
                    
                //$this.props.history.push('/'); // code for redirect home
                $this.props.history.push({
                    pathname: '/',
                    //search: '?query=abc',
                    redirectfrom: 'login'
                })
                  
            }
	
		}).catch((err) => {
            alert("Username password mismatch");
            console.log(err);
        });
    }
    render(){
        return(
            <div>
            <form onSubmit={this.saveRegister}>
                <br/>
                <h2>Login</h2>					
                <br/>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />						
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>					
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}
export default Login;