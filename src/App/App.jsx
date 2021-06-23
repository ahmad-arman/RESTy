
import './App.scss';
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Form from '../Form/form';
import Results from '../Result/results';
import If from '../if/If';
import Else from '../else/else';
import Loading from '../loading/loading'



class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      headers:{},
     
      flag: false,
      loading: false,
      // count : 0,
      // results:{},
      url:'',
      method :'',

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

  render(){
    return (
      <React.Fragment>
      <Header />
      <Form  handler={this.handleForm} toggle={this.toggle}/>
      <If condition ={this.state.flag}>
      <Results  test={this.state}/>
      </If>
      <Else condition ={this.state.flag}>
      <Loading loading={this.state.loading}>
        <p>Wait Man</p>
        <div class="loader"></div>

        </Loading>
      </Else>
      <Footer />
   
    </React.Fragment>

    )
  }
}

export default App;
