import React from "react";
import { useParams } from 'react-router'
import useFetch from './useFetch'
import './Destinationdetails.css'





export default function Destinationdetails() {
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
                    <div className="right">
                    

                    </div>

                </div>
              
            
              
              </div>

        </div>
    )
}


