
// import '../App/App.scss';
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Form from '../Form/form';
import Results from '../Result/results';
import If from '../if/if';
import Else from '../else/else';
import Loading from '../loading/loading';
import History from '../history/history';

import { BrowserRouter as Router, HashRouter, MemoryRouter } from 'react-router-dom';






class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      headers:{},
     
      flag: false,
      loading: true,
      // count : 0,
      // results:{},
      url:'',
      method :'',
      save : JSON.parse(localStorage.getItem('save')),
      results:{},
     
  }
  }

  handleForm = (headers,results,method,url,flag ) => {
    console.log('from the parent handler', headers,results,method,url,flag);
    console.log('************',results);
    this.setState({headers,results,method,url,flag });
  }

  toggle = () => {
    //if true then return false else return true

    this.setState({ loading: !this.state.flag });
    console.log('*************************',!this.state.flag )
  }

  // handlers =()=>{


  // }

  render(){
    return (
      <React.Fragment>


                  
          

      

      
     
      <Form  handler={this.handleForm} toggle={this.toggle}/>
      {/* <Loading /> */}
      <If condition ={this.state.flag}>
     
     <Results  test={this.state}  />
     <Loading />
    
      </If>
      <Else  condition ={this.state.flag}>
 
      <Loading />

        
      </Else>
      <History />
      
      


     
     
   
    </React.Fragment>

    )
  }
}




export default Home;
