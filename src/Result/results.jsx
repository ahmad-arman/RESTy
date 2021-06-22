import React from 'react';
import JSONPretty from 'react-json-pretty';
import ReactJson from 'react-json-view'



class Results extends React.Component {
 

    render() {
      
        
        return (
          
            <React.Fragment>
{          
            <div id='data'>
                        <ReactJson src={this.props.test.headers} theme="tomorrow"  name='Headers'/>
                        <ReactJson src={this.props.test} theme="tomorrow" name='Response'/>                         
            </div> 
            
              

            }
           </React.Fragment>
        )
    }
}

export default Results