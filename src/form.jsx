import { span } from 'prelude-ls';
import React from 'react';
import './form.scss';
let methodGlobal='';
let urlGlobal='';
class Form extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            method:"",
            url:""
        }

    }
    handlerURL = e =>{
        urlGlobal = e.target.value;
        console.log(urlGlobal,'url')
        // this.setState({ url });
    }
    handlerSelect = e => {
        e.preventDefault()
      methodGlobal =e.target.value;
        console.log(methodGlobal,'999999999999')
        return methodGlobal;
    }
    handlerBtn =e =>{
        e.preventDefault();
        // let ahmad =this.state.url
        // let ahamd2 =this.state.method;
        // console.log(this.handlerSelect)
        
        this.setState({ method:methodGlobal ,url:urlGlobal });
        console.log();
       
        
    }
   




    render(){
        return (
            <main>
               
                <form action="">
                <label htmlFor="">URL :</label> 
                <input type="url" onChange={this.handlerURL} /> <button onClick={this.handlerBtn} id="btn">Go</button> 
    
                <br></br>
                {/* <input type="radio" onSelect={this.handlerSelect} id="get"  name="meth" value="get"/> <label htmlFor="">Get</label>
                <input type="radio" id="put" name="meth" value="put"/><label htmlFor="">Put</label>
                <input type="radio" id="post"name="meth" value="post"/> <label htmlFor="">Post</label>
                <input type="radio" id="delete" name="meth" value="delete"/> <label htmlFor="">Delete</label>
     */}
            <button value="Get" onClick ={this.handlerSelect} id="click"> Get</button>
            <button value="Post"  onClick ={this.handlerSelect} id="click"> Post</button>
            <button value="Delete"  onClick ={this.handlerSelect}id="click"> Delete</button>
            <button value="Put"  onClick ={this.handlerSelect}id="click"> Put</button>

                </form>
                <section>
                    <span>{` ${this.state.method}    ` } </span> <span> { `${  this.state.url   }`}</span>
                    
                </section>


                

            </main>
    
        );

    }
};

export default Form;