import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import  format from "date-fns/format";
import  parse from "date-fns/parse";
import  startOfWeek from "date-fns/startOfWeek";
import  getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Strapi.css";
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
    title: "Big Meeting",
    allday: true,
    start: new Date(2021,6,0),
    end: new Date(2021,6,0),
    
  },

  {
    title: "Vacation",
    start: new Date(2021,10,7),
    end: new Date(2021,10,10),
    
  },

  {
    title: "Conference",
    start: new Date(2021,10,20),
    end: new Date(2021,10,23),
    
  },


]



function Strapi() {
  
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add new Event</h2>
     
     <div className="calendar">
      <Calendar localizer={localizer} events={allEvents} 
        startAccessor="start" endAccessor="end" style={{height:100, margin:"50px"}}/>
        

     </div>
      
      

      <div className="date-picker">
        <input type="text"  className="shadow w-full py-2 px-6 rounded" placeholder="Add title" style={{ width: "20%", marginRight: "10px"}}
        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title:e.target.value})}
        
        />

        <DatePicker  className="check-in" placeholderText="Check-in" 
        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
        />

        <DatePicker className="check-out"  placeholderText="Check-out"
        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
        />
        <button  onClick={handleAddEvent}>Book</button>
      </div>
      
    </div>
  );
}



export default Strapi
