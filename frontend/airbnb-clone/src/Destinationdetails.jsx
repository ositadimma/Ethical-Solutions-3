import React, { useState } from "react";
import { useParams } from 'react-router'
import useFetch from './useFetch'
import './Destinationdetails.css'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import  format from "date-fns/format";
import  parse from "date-fns/parse";
import  startOfWeek from "date-fns/startOfWeek";
import  getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  
})

const events =[
    {
      title: "",
      allday: true,
      start: new Date(2021,6,0),
      end: new Date(2021,6,0),
      
    }
  
  
  
]
  


export default function Destinationdetails() {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

    const { id} = useParams();
    const { loading, error, data} = useFetch('http://localhost:1337/aibnb-clones/' + id)
    
   if(loading) return <p>loading...</p>
   if(error) return <p>Error...</p>
   console.log(data)
    return (

        <div className="App">
           
           <div className='content'>
               <div className="heading">
                    <h1 className="font-bold text-2xl">{ data.Name}</h1>
                    <div className="bottom-section">
                        <div className="location"><a href="https://black-history-month-api.herokuapp.com/people">Lagos, Nigeria</a></div>
                        <div className="socials">
                            <div className="share">
                                <i class="fas fa-share"></i>
                                <a href="https://black-history-month-api.herokuapp.com/people">Share</a>
                            </div>
                            <div className="save">
                            <i class="fas fa-heart"></i>
                            <a href="https://black-history-month-api.herokuapp.com/people">Save</a>
                            </div>

                        </div>
                    </div>
               </div>
               <div className="images">
                   <div className="left">
                     <img src={`${`http://localhost:1337`}${data.Media.formats.large.url}`} alt="destination-pics"/> 

                   </div>
                   <div className="right">
                       <div className="top">
                         <img src={`${`http://localhost:1337`}${data.pictures[0].formats.thumbnail.url}`} alt="destination-pics"/>
                         <img src={`${`http://localhost:1337`}${data.pictures[1].formats.thumbnail.url}`} alt="destination-pics"/>

                       </div>
                       <div className="bottom">
                       <img src={`${`http://localhost:1337`}${data.pictures[2].formats.thumbnail.url}`} alt="destination-pics"/>
                        <img src={`${`http://localhost:1337`}${data.pictures[3].formats.thumbnail.url}`} alt="destination-pics"/>

                       </div>
                   </div>
               </div>
              
             
                <div className="middle-section">
                <div className="upper">

                    <div className="heading">
                        <h1>Island hosted by { data.author}</h1>
                    </div>
                    <div className="img">
                        <img src={`${`http://localhost:1337`}${data.host.formats.thumbnail.url}`} alt="destination-pics"/>
                    </div>
                </div>
                
                    <div className="left">
                        
                        <div className="top">
                            <div className="features">
                                <div className="guest">
                                    <li>{ data.guest}</li>
                                    <p>guests</p>
                                </div>
                                
                                <div className="beds">
                                    <li>{ data.beds}</li>
                                    <p>beds</p>
                                </div>

                                <div className="baths">
                                    <li>{ data.baths}</li>
                                    <p>baths</p>
                                </div>
                                
                            </div>
                        </div>

                        
                    </div>
                    <hr className="line-up"></hr>
                        <div className="left-bottom">
                            <div className="basics">
                                    <div className="amenities">
                                        <div className="logo">
                                            <i class="fas fa-home"></i>

                                        </div>
                                        <div className="description">
                                            <div className="heading">
                                                <h2>Entire Home</h2>
                                            </div>
                                            <div className="details">
                                                <p>You will have this place all to your self</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>


                            <div className="basics2">
                                    <div className="amenities">
                                        <div className="logo">
                                            <i class="fas fa-home"></i>

                                        </div>
                                        <div className="description">
                                            <div className="heading">
                                                <h2>Enhanced clean</h2>
                                            </div>
                                            <div className="details">
                                                <p>The host has committed to Ethical-Solution's 5-step enhanced cleaning process</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>


                            <div className="basics3">
                                    <div className="amenities">
                                        <div className="logo">
                                            <i class="fas fa-home"></i>

                                        </div>
                                        <div className="description">
                                            <div className="heading">
                                                <h2>Pool</h2>
                                            </div>
                                            <div className="details">
                                                <p>Guests usually search for this popular amenity</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>


                        

                    
                    

                   
                    <div className="right">
                        <div className="amount">
                            <p className="tag">${data.Amount}</p>
                            <p className="duration">/night</p>
                        </div>
                        <div className="checks">
                            <div className="check-in" >
                                <h6> CHECK IN</h6>
                                <button><p className="add">Add date</p></button>
                            </div>
                            <div className="check-out">
                            <h6> CHECKOUT</h6>
                            <button><p className="add">Add date</p></button>
                            </div>
                        
                        </div>
                        <div className="guests">
                            <div className="guest-number">
                                <h6>GUESTS</h6>
                                <p>1 guest</p>
                            </div>
                            <div className="dropdown">
                                <i class="fas fa-angle-down"></i>

                            </div>
                        </div>

                        <div className="check-availability">
                            <button><p>CHECK AVAILABILITY</p></button>
                        </div>
                    </div>
                    <hr className="line-up"></hr>

                   

                    <div className="destination-details">
                
                        <div className="details">
                            <p>{data.Description}</p>

                        </div>
                    </div>

                    <hr className="line"></hr>

                    <div className="offer">
                        <div className="packages">
                            <h1>What this place offers</h1>
                            <div className="kitchen">
                             <i class="fas fa-home"></i>
                             <p>Kitchen</p>

                            </div>

                            <div className="kitchen">
                             <i class="fas fa-home"></i>
                             <p>Free parking on premises</p>

                            </div>

                            <div className="kitchen">
                             <i class="fas fa-home"></i>
                             <p>TV</p>

                            </div>

                            <div className="kitchen">
                             <i class="fas fa-home"></i>
                             <p>Air Conditioning</p>

                            </div>

                            <div className="kitchen">
                             <i class="fas fa-home"></i>
                             <p>Washer</p>

                            </div>
                        </div>
                        <div className="offer-right">

                            <div className="kitchen">
                                <i class="fas fa-home"></i>
                                <p>Wifi</p>

                            </div>

                            <div className="kitchen">
                                <i class="fas fa-home"></i>
                                <p>Pool</p>

                            </div>

                            <div className="kitchen">
                                <i class="fas fa-home"></i>
                                <p>Elevator</p>

                            </div>

                            <div className="kitchen">
                                <i class="fas fa-home"></i>
                                <p>Dryer</p>

                            </div>

                            <div className="kitchen">
                                <i class="fas fa-home"></i>
                                <p>Spa</p>

                            </div>
                        
                        </div>




                    </div>-

                    <div className="offer-button">
                        <button><p>Show all 21 amenities</p></button>
                    </div>
                
                    <hr className="line"></hr>

                    

                </div>
                <hr className="line"></hr>

                <div className="date-picker">
                    <input type="text"  className="shadow w-full border-2 border-gray-400   focus:ring-2 focus:ring-transparent py-2 px-6 rounded mt-7" placeholder="Add title" style={{ width: "20%", marginRight: "10px"}}
                    value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title:e.target.value})}
                    
                    />
 
                    <div  style={{ width: "20%"}}>
                        <DatePicker  className="shadow  border-2 border-gray-400 py-2 px-6 rounded mt-7 ml-5"placeholderText="Check-in" 
                        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
                        />

                    </div>
                    <div  style={{ width: "20%"}}>
                        <DatePicker  className="shadow border-2 border-gray-400 py-2 px-6 rounded mt-7 ml-5" placeholderText="Check-out"
                        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
                        />      

                    </div>
                   <div className="book-destination">
                        <button  onClick={handleAddEvent}>Book Destination</button>  
                   </div>
                    
                    
                </div>
            

                <div className="calendar">
                 <Calendar localizer={localizer} events={allEvents} 
                 startAccessor="start" endAccessor="end" style={{height:300, margin:"50px"}}/>
        

                </div>

                
                        

                
              
            
              
              </div>

        </div>
    )
}


