import React from 'react';
import useFetch from './useFetch'
import { useParams } from 'react-router'



// ES7 snippets to do 'rfce'

function Reviews() {
    const { id} = useParams();
    const { loading, error, data} = useFetch('http://localhost:1337/reviews/' + id)
    
   if(loading) return <p>loading...</p>
   if(error) return <p>Error...</p>
   

    

  
    return (
        <div className='reviews'>
            <div className="front">

                    <div className="feedback">
                        <h3>{data.name}</h3>
                        <h3>{data.reviews}</h3>

                  </div>

                        
            </div>


            


                    
           

                   

               
                           
                    
                
                  
                  

            
               
        
            
            
        </div>
    )
}

export default Reviews
