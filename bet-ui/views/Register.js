import React, { Component } from 'react';
import axiosApi from './../axiosConfig';
import qs from 'qs';

let $this;
class Register extends Component{
    constructor(props){
        super(props);
        $this=this;
		
    }
    //Handle changes in the view - set State
    handleNameChange(e){
        $this.setState({
            name:e.target.value
        })
    } 
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
    handleSubmit(e){
        e.preventDefault(); //prevent refresh

        const user = {email:$this.state.email, password:$this.state.password, name:$this.state.name}

        // send ajax with axio 
		axiosApi.post("user", qs.stringify(user)).then((res) => {
		$this.props.history.push('/login'); // code for redirect login

		});
    }
    render(){
        return(
        <div>
            <h2>Register</h2>
            <br/>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input onChange={this.handleNameChange} type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter email" />						
            </div>
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
export default Register;