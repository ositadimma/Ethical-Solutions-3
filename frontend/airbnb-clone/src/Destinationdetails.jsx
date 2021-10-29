import React from "react";
import { useParams } from 'react-router'
import useFetch from './useFetch'




export default function Destinationdetails() {
    const { id} = useParams();
    const { loading, error, data} = useFetch('http://localhost:1337/aibnb-clones/' + id)
    
   if(loading) return <p>loading...</p>
   if(error) return <p>Error...</p>
   console.log(data)
    return (

        <div className="App">
           
           <div className='content'>
              <img src={`${`http://localhost:1337`}${data.Media.formats.thumbnail.url}`}/>
              <h1 className="font-bold text-2xl">{ data.Name}</h1>
              <p>{data.Description}</p>
            
              
              </div>

        </div>
    )
}


