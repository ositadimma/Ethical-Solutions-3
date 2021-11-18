import React from 'react';
import { useState, useEffect } from "react"
import './SearchPage.css';
import './SearchResult.css';
import SearchResult from "./SearchResult";
import axios from 'axios';
import { Link } from 'react-router-dom';


const endpoint = `http://localhost:1337/aibnb-clones`



function SearchPage() {
    const [destination, setDestination] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const[isLoading, setIsLoading] = useState(true)

  const fetchDestination = async () => {
  
    const res = await fetch(endpoint)
    const data = await res.json()
    setDestination(data)
    setIsLoading(false)
    
  }

  useEffect(() => {
    fetchDestination()
  }, [])

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
  const { data } = axios.get('http://localhost:1337/aibnb-clones',
  {
    
  });

  console.log(data)   
  }, []);


  

  
    return (
      <div className="searchPage">
        {isLoading ? <h1>Loading...</h1>:<div>
                    <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Search destinations"
                    autoComplete="on"
                    className="shadow mt-10 ml-12 md:mt-2 md:w-11/12 py-2 px-6 rounded"  
                    onChange={(e) => searchDestination(e.target.value)}
                />
            

        
        {searchInput.length > 1
          ? filtered && filtered.map(({ id,  Name, Description, ratings, Location, Media, medium, pictures, Amount}) => (
            <Link to={`/destination/${id}`}>
                  <div  key={id}>
                    <SearchResult
                      img={`${`http://localhost:1337`}${Media.formats.thumbnail.url}`}
                      title={Name}
                      description={Description}
                      price={Amount}
                      star={ratings}
                    />
             
                  </div>
             </Link>
              
              
            ))
          : destination && destination.map(({ id, Name, Amount, ratings, location, medium, guest, beds, bath, author, host, url, Description,  Media, pictures,  thumbnail, large, small}) => (
             <Link to={`/destination/${id}`}>
                  <div  key={id}>
                    <SearchResult
                      img={`${`http://localhost:1337`}${Media.formats.thumbnail.url}`}
                      title={Name}
                      description={Description}
                      price={Amount}
                      star={ratings}
                    />
             
                  </div>
             </Link>
             
            ))}
      

            


            

            
            
            
            
        </div>}
      </div>
        
    )
}

export default SearchPage
