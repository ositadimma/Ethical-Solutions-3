import React, { useState, useEffect } from "react";
import axios from "axios";




function Strapi() {
  const [restaurants, setRestaurant] = useState('');
  const [filter, setFilter] = useState('');
  const searchText = (event) =>{
    setFilter(event.target.value);

  }
  let dataSearch = restaurants.filter( x =>{
    return Object.keys(x).some(key =>
        x[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )

  });
  

  useEffect(() => {
    axios
      .get('http://localhost:1337/restaurants')
      .then((res) => {
        const responseRestaurants= res.data;
        setRestaurant(responseRestaurants);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div className="App">
      <input type="text" placeholder="search" value={filter}  onChange={searchText.bind(this)}/>
      {dataSearch && dataSearch.map( x => {
        const { id, name, description} = x;
        return(
          <div className="card" key={id}>
            

          <h3>{name}</h3>
          <h5>{id}</h5>
          <p>{description}</p>
          </div>


        )
      })}
        
      
    </div>
  );
}



export default Strapi
