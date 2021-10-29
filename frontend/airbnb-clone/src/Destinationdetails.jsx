import React from "react";
import { useParams } from 'react-router'
import useFetch from './useFetch'
import './Destinationdetails.css'




export default function Destinationdetails() {
    const { id} = useParams();
    const { loading, error, data} = useFetch('http://localhost:1337/aibnb-clones/' + id)
    
   if(loading) return <p>loading...</p>
   if(error) return <p>Error...</p>
   console.log(data)
    return (

        <div className="App">
           
           <div className='content'>
               <div className="images">
                   <div className="left">
                     <img src={`${`http://localhost:1337`}${data.Media.formats.thumbnail.url}`}/> 

                   </div>
                   <div className="right">
                       <div className="top">
                         <img src={`${`http://localhost:1337`}${data.pictures[0].formats.thumbnail.url}`}/>
                         <img src={`${`http://localhost:1337`}${data.pictures[1].formats.thumbnail.url}`}/>

                       </div>
                       <div className="bottom">
                       <img src={`${`http://localhost:1337`}${data.pictures[2].formats.thumbnail.url}`}/>
                        <img src={`${`http://localhost:1337`}${data.pictures[3].formats.thumbnail.url}`}/>

                       </div>
                    

                   </div>
               </div>
              
              <h1 className="font-bold text-2xl">{ data.Name}</h1>
              <p>{data.Description}</p>
            
              
              </div>

        </div>
    )
}


