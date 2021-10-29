import React from 'react';
import { useState, useEffect } from "react"
import './Card.css'
import Card from './Card'
import axios from 'axios';
import { Link } from 'react-router-dom';



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

  useEffect(() => {
    axios
      .post('http://localhost:1337/auth/local',{
        identifier: 'alaobukky2@gmail.com',
        password: 'buky@123',
  
      })
      
      .then((response) => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        
      })
      .catch((error) => {
        console.log('An error occured:', error.response);
      });
     
  }, []);



useEffect(() => {
  const { data } = axios.get('http://localhost:1337/aibnb-clones',
  {
    headers:{
      Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM0NTU1NjgxLCJleHAiOjE2MzcxNDc2ODF9.y3V301iwfCj19D6feykshTuoWSonK61xzSaEYaKxvjg',
    },
  });

  console.log(data)   
  }, []);
  

  

  return (
    <div className="flex flex-col justify-center p-5 md:max-w-2xl md:mx-auto lg:max-w-5xl">
      
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Search..."
        autoComplete="on"
        className="shadow w-full py-2 px-6 rounded"  
        onChange={(e) => searchDestination(e.target.value)}
      />


<section className="bg-white  mt-10 grid grid-cols-1 p-5  gap-7 sm:grid-cols-2 lg:grid-cols-2">
        {searchInput.length > 1
          ? filtered && filtered.map(({ id,  Name, Description,Media, pictures, Amount}) => (
            <Link to={`/destination/${id}`}>
                  <div  className='home__section' key={id}>
                    <Card
                      src={`${`http://localhost:1337`}${Media.formats.thumbnail.url}`}
                      title={Name}
                      description={Description}
                      price={Amount}
                    />
             
                  </div>
             </Link>
              
              
            ))
          : destination && destination.map(({ id, Name, Amount,  url, Description,  Media, pictures,  thumbnail, large, small}) => (
             <Link to={`/destination/${id}`}>
                  <div  className='home__section' key={id}>
                    <Card
                      src={`${`http://localhost:1337`}${Media.formats.thumbnail.url}`}
                      title={Name}
                      description={Description}
                      price={Amount}
                    />
             
                  </div>
             </Link>
             
            ))}
      </section>
       
      

    </div>
  )
}