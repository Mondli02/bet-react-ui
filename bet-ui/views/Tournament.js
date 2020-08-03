import React, { Component } from 'react';
import axiosApi from './../axiosConfig';
import qs from 'qs';


let $this;

class Tournament extends Component{
    
    constructor(props){
        super(props);
        this.state = {tournaments:[],
                     query: '', 
                     results:{},
                     loading: false,
                     message:''
                    }

        $this=this;
       
    }
    handleOnInputChange=( event) =>{
        const query = event.target.value;
        $this.setState(  {query, loading:true, message :''} );
    }

componentDidMount(){
    axiosApi.get('tournaments').then((res) => {
        $this.setState({ tournaments : res.data })
});
        
}
tabRows(){
    
    return $this.state.tournaments.map(function(tournament, i){
        return <tr key={i}>
                <td>{tournament.name}</td>
                </tr>;
    });
}
fetchSearchResults = (updatePageNo, query) =>{
    axiosApi.get('tournaments?'+qs.stringify(query)).then((res) => { 
        const tournamentsdata = $this.state.tournaments.concat(res.data);
        $this.setState({ tournaments : tournamentsdata
        });
    
});
}
    render(){
        const {query} = $this.state;
        return(
          
            <div>
            <hr/>
          <h1>Tournament</h1>
          <div className="row" >
                            </div> 

          <table className="table table-hover">
              <thead>
                  <tr>
                      <th>name</th>
                  </tr>
              </thead>
              <tbody>
                  {this.tabRows()}
              </tbody>
          </table>
          <hr/>
        </div>
        )
    }
}
export default Tournament;