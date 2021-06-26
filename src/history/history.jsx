import './history.scss';




const History = ()=>{

       let data = JSON.parse(localStorage.getItem('save'))
               
    
  
        return (
            
           
             
     

              <div>
                 
                  { console.log(data,'sdddddddddddddddddddd')}
                  <div id="history">

                      
                    {     

                             data?  data.map(ele=>{
                               return(
                                // <li>{ele.method}  { ele.url}</li> 
                                <button type="submit" ><li>{ele.method}  {ele.url} </li>  </button>
                                )
                               }):null
                    }
                     

                      
                     
                       
                  </div>
             
             </div>

        );

    
    
        
    

}

export default History;

