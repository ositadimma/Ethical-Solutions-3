import React, { useState, useEffect } from "react";
import axios from "axios";






function Strapi() {
  const [restaurants, setRestaurant] = useState('');
  
  
  
  

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
      
      {restaurants && restaurants.map( x => {
        
        const endpoint= `http://localhost:1337`
        const link = x.img.formats.thumbnail.url
        return(
          <div className="card" key={x.id}>
            
          
          <h3>{x.name}</h3>
          <h5>{x.id}</h5>
          <p>{x.description}</p>
          <img src={{endpoint}+{link}}/>
          
          </div>


        )
      })}
        
      
    </div>
  );
}



export default Strapi
