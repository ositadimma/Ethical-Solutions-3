import React from 'react';
import { useState, useEffect } from "react"
import './SearchPage.css';
import './SearchResult.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import axios from 'axios';
import { Link } from 'react-router-dom';


const endpoint = `http://localhost:1337/aibnb-clones`


 






function SearchPage() {
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
        <div className='searchPage'>
                    <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Search..."
                    autoComplete="on"
                    className="shadow mt-10 ml-7 md:mt-2 md:w-full py-2 px-6 rounded"  
                    onChange={(e) => searchDestination(e.target.value)}
                />
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

        
        {searchInput.length > 1
          ? filtered && filtered.map(({ id,  Name, Description, Location, Media, medium, pictures, Amount}) => (
            <Link to={`/destination/${id}`}>
                  <div  key={id}>
                    <SearchResult
                      img={`${`http://localhost:1337`}${Media.formats.thumbnail.url}`}
                      title={Name}
                      description={Description}
                      price={Amount}
                      star={4.73}
                    />
             
                  </div>
             </Link>
              
              
            ))
          : destination && destination.map(({ id, Name, Amount, location, medium, guest, beds, bath, author, host, url, Description,  Media, pictures,  thumbnail, large, small}) => (
             <Link to={`/destination/${id}`}>
                  <div  key={id}>
                    <SearchResult
                      img={`${`http://localhost:1337`}${Media.formats.thumbnail.url}`}
                      title={Name}
                      description={Description}
                      price={Amount}
                      star={4.73}
                    />
             
                  </div>
             </Link>
             
            ))}
      

            


            

            
            
            
            
        </div>
    )
}

export default SearchPage
