import React, { Component } from 'react';
import axiosApi from './../axiosConfig';

class Home extends Component{
    constructor(props){
		super(props);
		const redirectfrom = this.props.location.redirectfrom;
		if(redirectfrom=='login'){
			window.location.reload();
        } 
    }
componentDidMount(){
    setTimeout(function() {
        axiosApi.get('auth/user').then ((res) => {
            console.log(res.data);
        });
    },1500)
        
}

    render(){
        return(
            <div>
                <hr/>
                <h1>BET Assessment</h1>
                <hr/>
            </div>
        )
    }
}
export default Home;