import { span } from 'prelude-ls';
import React from 'react';
import './form.scss';
import superagent from 'superagent';
let methodGlobal='';
let urlGlobal='';
let error =''
class Form extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            method:"",
            url:""
          
        }

    }
    handlerSubmit = async e =>{
        e.preventDefault();
        // console.log(urlGlobal,'ssssssssssssssssss');
        // let raw = await fetch(urlGlobal)
        
        // let data =await raw.json();
        //     console.log(data,'ewwwwwwwwwwwwwwwwwwwwwwwwww');
           
        //  const count = data.count;
        //  const results = {
        //  Headers: { 'Content-Type': 'application/json' },
        //  Response:data};
            // this.props.handler(results,true);
            // await  console.log(ahmad,'ahmad77777777777777777777777777777777777777777777777')
          let url =  e.target.url.value ;
          let method =e.target.method.value ;
          let body = e.target.body.value ;
            // let ahmad =await superagent.get(urlGlobal)
            console.log(url , method ,body , 'hdhddhhdhdhd')
             
           
                superagent[`${method}`](url)
               
                .set('Accept', 'application/json')
               
                .send({body})
                
            
            
                .then(data => {
                    let myqury ={method:method, body:body,url:url}
    
                    console.log(data,'data superagent')
                    try {
                        this.props.handler(  data.headers,data.body,data.req.method , data.req.url,true);
    
                        
                    } catch (error) {
                        this.props.handler("you have error",error.message,method,url)
                    }
                   
    
    
                })

          
            // if(method==='post'){
                
            //     superagent[`${method}`](url).send({body})
            //     .set('X-API-Key', 'foobar')
            //     .set('Accept', 'application/json')
            //     .then(res => {
            //        alert('yay got ' + JSON.stringify(res.body));
            //     });
            // }
          
            // if(method ==='post'){
            //     console.log('hhsshhsh');
            //     // let url = url;

            //   let xhr = new XMLHttpRequest();
            //     xhr.open("POST", url);

            //      xhr.setRequestHeader("Content-Type", "application/json");

            //          xhr.onreadystatechange = function () {
            //     if (xhr.readyState === 4) {
            //        console.log(xhr);
            //         console.log(xhr.responseText);
            //         let data= xhr.responseText;
            //         this.props('null',data,method,url,true);
    
            //    }};

            // let data = `${body}`;

            //    xhr.send(data);
            // }
          
       
            
       
           

      
      
           

           
    }
    // handlerURL = e =>{
    //     urlGlobal = e.target.value;
    //     console.log(urlGlobal,'url')
    //     // this.setState({ url });
    // }
    // handlerSelect = e => {
    //     e.preventDefault()
    //   methodGlobal =e.target.value;
    //     console.log(methodGlobal,'999999999999')
    //     return methodGlobal;
    // }
    // handlerBtn =e =>{
    //     e.preventDefault();
    //     // let ahmad =this.state.url
    //     // let ahamd2 =this.state.method;
    //     // console.log(this.handlerSelect)
        
    //     this.setState({ method:methodGlobal ,url:urlGlobal });
    //     console.log();
       
        
    // }
   




    render(){
        return (
            <main>
               
                <form onSubmit ={this.handlerSubmit} >

                <label >URL :</label> 
                <input type='url' name='url' id='url' required/> 

              
               <label >Body</label> 
              
                <textarea type="text" name="body" id="body" rows="5" cols="50" >   </textarea>

                 <button type="submit" id="btn">Go</button> 
    
                
                <label>Get</label>
                <input type="radio" id="get"  name="method" value="get" /> 

                <label >Put</label>
                <input type="radio" id="put" name="method" value="put"/>

                <label >Post</label>
                <input type="radio" id="post"name="method" value="post"/> 

                <label>Delete</label>
                <input type="radio" id="delete" name="method" value="delete"/> 
    
            {/* <button value="Get" onClick ={this.handlerSelect} id="click"> Get</button>
            <button value="Post"  onClick ={this.handlerSelect} id="click"> Post</button>
            <button value="Delete"  onClick ={this.handlerSelect}id="click"> Delete</button>
            <button value="Put"  onClick ={this.handlerSelect}id="click"> Put</button> */}

                </form>
                <section>
                    {/* <span>{` ${this.state.method}    ` } </span> <span> { `${  this.state.url   } `} */}

                    {/* </span> */}
                    {/* <div>
                        { `${this.state.count}  `   }
                    </div>

                    <div>
                        { `${this.state.results}  `   }
                    </div> */}

                    
                </section>


                

            </main>
    
        );

    }
};

export default Form;