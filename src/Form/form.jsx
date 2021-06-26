// import { span } from 'prelude-ls';
import React from 'react';
import './form.scss';
// import superagent from 'superagent';
import axios from 'axios'; 
// import Loader from 'react-loader-spinner'

// let methodGlobal='';
// let urlGlobal='';
// let error =''

let history = [];

function save(){
    let saved = getData();
   
    if(history.length === 0 || history.length === 1 ){
        for(let i in saved){
            history.unshift(saved[i])
        }
    }
    localStorage.setItem('save', JSON.stringify(history));
    
}
function  getData(){
    let information = localStorage.getItem('save');
    if(information){
        information = JSON.parse(information)
        console.log(information)
        return information;
    }else {return []}
}




class Form extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            method:"",
            url:""
          
        }


    }
    // async componentDidMount() {
    //     // POST request using axios with async/await
    //     const article = { title: 'React POST Request Example' };
    //     const response = await axios.post('https://reqres.in/api/articles', article);
    //     this.setState({ articleId: response.data.id });
    // }

   
     
    handlerSubmit = async e =>{
        e.preventDefault()

       
       
        
        
      
        
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
          let body = e.target.body.value  ;
          let token = e.target.token.value ;
          let Auth =e.target.Auth.value ;
         
        //   setTimeout(() => {
           
            if(method=== 'post'){
                axios({
                    method: `${method}`,
                    url: url,
                    data: body !=='' ? JSON.parse(body) :body = {},                    
                    headers: Auth !== '' ? {
                        'Authorization': ` ${Auth} ${token}` 
                      } : {},
                    
                    })
    
                .then(data => {
                    // let myqury ={method:method, body:body,url:url}
                    // axios.send(data)
                    console.log(data,'data superagent')
                    console.log(body,'sssssssssssssssssssssssssssssss');
                    // try {
                        this.props.handler(  data.headers,data.data,method , url,true);
                       
    
                        // localStorage.setItem('save',JSON.stringify({method:method , url:url}))
                    // } catch (error) {
                    //     this.props.handler("you have error",error.message,method,url)
                    // }
                  
    
    
                })
                .catch (error => {
                    console.log(error,'data superagent')
                    this.props.handler("you have error",error.message,method,url)
                })

            }else{

                axios({
                    method: `${method}`,
                    url: url,
                    // data: body !=='' ? JSON.parse(body) :body = {},                    
                    headers: Auth !== '' ? {
                        'Authorization': ` ${Auth} ${token}` 
                      } : {},
                    
                    })
    
                .then(data => {
                    
                    console.log(data,'data superagent')
                    console.log(body,'sssssssssssssssssssssssssssssss');
                  
                        this.props.handler(  data.headers,data.data,method , url,true);

                })
                .catch (error => {
                    console.log(error,'data superagent')
                    this.props.handler("you have error",error.message,method,url)
                }) 

            }
       
        // }, 5000);

          history.push({method:method , url:url})
          save()
      
          
          
             
          
             
                
               


                
               
                
    }
   




    render(){
      
               
        return (
            
               
            <main>

            
                <form onSubmit = { this.handlerSubmit } >
      

                <label >URL :</label> 
                <input type='url' name='url' id='url' required/> 
                 <button type="submit" id="btn" >Go</button> 

              <div>
                  <label > token </label> 
              </div>
                  <textarea type="text" name="token" id="token" rows="4" cols="30" >   </textarea>

              <div>
                 <label >Body</label> 
              </div>
                 <textarea type="text" name="body" id="body" rows="5" cols="50"  > enter json file  </textarea>

               
           





                 <div>
                 {/* <label>Basic Authorization</label> */}
                <input type="radio" id="get"  name="Auth" value="Basic" hidden /> 

                <label >Barear Authorization</label>
                <input type="radio" id="put" name="Auth" value="Bearer"/>

                 </div>
    
                
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
           
                {/* <section>
                    {/* <span>{` ${this.state.method}    ` } </span> <span> { `${  this.state.url   } `} */}

                    {/* </span> */}
                    {/* <div>
                        { `${this.state.count}  `   }
                    </div>

                    <div>
                        { `${this.state.results}  `   }
                    </div> */}

                    
                {/* </section>  */}


                

            </main>
    
        );

    }
};

export default Form;