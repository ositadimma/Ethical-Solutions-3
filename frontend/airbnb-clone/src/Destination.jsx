import React from 'react';
import { useState, useEffect } from "react"
import './Card.css'
import Card from './Card'




const endpoint = `http://localhost:1337/aibnb-clones`

export default function Destination() {
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

  return (
    <div className="flex flex-col justify-center p-5 md:max-w-2xl md:mx-auto lg:max-w-5xl">
      
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Search..."
        autoComplete="off"
        className="shadow w-full py-2 px-6 rounded"
        onChange={(e) => searchDestination(e.target.value)}
      />


<section className="bg-white shadow rounded mt-10 grid grid-cols-1 p-5 text-gray-900 gap-7 sm:grid-cols-2 lg:grid-cols-2">
        {searchInput.length > 1
          ? filtered && filtered.map(({ id,  Name, Description, Amount, url, Media, formats, thumbnail, small}) => (
              <div className='home__section' key={id}>
              <Card
                src={`http://localhost:1337/uploads/bubblesite_48c29ad640.png`}
                title={Name}
                description={Description}
              />
              </div>
              
            ))
          : destination && destination.map(({ id, Name,  url, Description, Amount,  Media,  thumbnail, small}) => (
              <div  className='home__section' key={id}>
               <Card
                src={`http://localhost:1337/uploads/bubblesite_48c29ad640.png`}
                title={Name}
                description={Description}
               />
             
              </div>
            ))}
      </section>
       
      

    </div>
  )
}