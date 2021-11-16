import React from 'react';
import { useState, useEffect } from "react"
import axios from 'axios';

const endpoint = `http://localhost:1337/available-spaces`
function Available() {
    const [destination, setDestination] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const fetchDestination = async () => {
    const res = await fetch(endpoint)
    const data = await res.json()
    setDestination(data)
  }

  useEffect(() => {
    fetchDestination()
  })

  const searchDestination = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredSearch = destination.filter((user) =>
        Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredSearch)
    } else {
      setFiltered(destination)
    }
  }

 
useEffect(() => {
  const { data } = axios.get('http://localhost:1337/available-spaces',
  {
    
  });

  console.log(data)   
  }, []);

    
    return (
        <div className="available">
            <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Search available spaces"
                    autoComplete="on"
                    className="shadow mt-10 ml-12 md:mt-2 md:w-11/12 py-2 px-6 rounded" 
                    onChange={(e) => searchDestination(e.target.value)} 
                />


        {searchInput.length > 1
          ? filtered && filtered.map(({ id, Destination, available, time}) => (
                  <div  key={id}>
                      <h2>{Destination}</h2>
                      <h2>{available}</h2>
                      <h2>{time}</h2>
                    
                      
    
                
             
                  </div>
              
              
            ))
          : destination && destination.map(({id, Destination, available, time }) => (
                <div  key={id}>
                    <h2>{Destination}</h2>
                    <h2>{available}</h2>
                    <h2>{time}</h2>
            
                

        
    
                </div>
             
            ))}
      

            


                
            
        </div>
    )
}

export default Available



