import React from 'react';
// import JSONPretty from 'react-json-pretty';
import ReactJson from 'react-json-view'



class Results extends React.Component {
 

    render() {
        console.log(this.props.test,'99999999999999999999999999999')
        
        return (
           
         
            <React.Fragment>
            <div id='data'>
                
                        {/* <ReactJson src={} theme="tomorrow"  name='Headers'/> */}
                        <ReactJson src={this.props.test} theme="tomorrow" />                         
            </div> 
             
              

            
           </React.Fragment>
        )
    }
}

export default Results