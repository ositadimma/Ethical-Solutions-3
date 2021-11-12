import React, { useState } from "react";
import "./Strapi.css";
import Axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';


toast.configure()

function Strapi() {
  const notify = () =>{
    toast('Booking Successful, proceed to home to explore more destinations')
  }
  const url = "http://localhost:1337/bookings-data"
  const [data, setData] = useState({
    Title:"",
    Checkin:"",
    Checkout:"",
    Guests:""
  })


  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      Title: data.Title,
      Checkin: data.Checkin,
      Checkout: data.Checkout,
      Guests: data.Guests

    })
    .then(res=>{
      console.log(res.data)
    })

  }

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)

  }
  return (
    <div className="Destination">

      <h1>Book Destination</h1>
      <div className="form">
        <form onSubmit={(e)=> submit(e)}>
          <input  onChange={(e)=>handle(e)} id="Title" value={data.Title} type="text" placeholder="Destination Name" 
          className="shadow  border-2 border-gray-400 py-2 px-6 rounded mt-7 ml-5"/>
          <input  onChange={(e)=>handle(e)} id="Checkin" value={data.Checkin} type="date" placeholder="check-in date" 
          className="shadow  border-2 border-gray-400 py-2 px-6 rounded mt-7 ml-5"/>
          <input onChange={(e)=>handle(e)} id="Checkout" value={data.Checkout} type="date" placeholder="check-out date"  
          className="shadow  border-2 border-gray-400 py-2 px-6 rounded mt-7 ml-5"/>
          <input onChange={(e)=>handle(e)} id="Guests" value={data.Guests} type="number" placeholder="Number of guests"  
          className="shadow  border-2 border-gray-400 py-2 px-6 rounded mt-7 ml-5"/>
           <button onClick={notify}>Book Destination</button>

          
        </form>

      </div>
      
    </div>
  );
}



export default Strapi
