import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from './Card'
import Banner from './Banner'
import Carousel, { CarouselItem } from "./Carousel";
import { Link } from 'react-router-dom';
import Axios from 'axios';



// ES7 snippets to do 'rfce'




function Home() {
    const [Homes, setHomes] = useState()
    useEffect(()=>{
        Axios.get(`http://localhost:1337/homepages`).then((res)=>{
            const responseHomes = res.data;
            setHomes(responseHomes);
        });
    }, []);
    
  
    return (
        <div className='home'>


            <Banner/>
             <div className="mobile">
             <div className="image">
                <img src="assets/beach.jpg" alt="destinations" />
            </div>
            <div className="mobile-contents">
                <div className="search-bar">
                    <Link to={'/search'} >
                     <i class="fas fa-search"></i>

                    </Link>


                    
                    <input type="text"  placeholder="Where are you going"/>
                </div>
                <div className="text">
                    <h4>Not sure where to go?</h4>
                    <h4>Perfect.</h4>
                </div>
                <div className="button">
                    <Link to={'/search'}>
                        <button>
                            <p>I'm flexible</p>

                        </button>

                    </Link>
                    
                </div>
            </div>
                
             </div>
                <div className='home__section'>
                { Homes && Homes.map(each =>{
                        const { card1,  card2, card3, title1, title2, title3, formats, thumbnail, medium, url} = each;
                        return(
                            <div className="cards">
                            <Link to={'/search'}>
                                <Card
                                src={`${`http://localhost:1337`}${card1.formats.medium.url}`}
                                title={title1}
                                description="Unique activities we can do together, led by a world of hosts."
                                
                                />

                            </Link>

                            <Link to={'/search'}>
                                <Card
                                src={`${`http://localhost:1337`}${card2.formats.medium.url}`}
                                title={title2}
                                description="Unique activities we can do together, led by a world of hosts."
                                
                                />

                            </Link>

                            <Link to={'/search'}>
                                <Card
                                src={`${`http://localhost:1337`}${card3.formats.thumbnail.url}`}
                                title={title3}
                                description="Unique activities we can do together, led by a world of hosts."
                                
                                />

                            </Link>
                            

                           

                        
                            </div>

                            
                            

                        )
                     })}

                </div>

                <div className="mobile-carousel">
                    <Carousel>
                        <CarouselItem>
                        <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Online Experiences"
                        description="Unique activities we can do together, led by a world of hosts."
                        
                        />
                        </CarouselItem>
                        <CarouselItem>
                            <Card
                                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                                title="Unique stays"
                                description="Spaces that are more than just a place to sleep."
                                
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <Card
                                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                                title="Unique stays"
                                description="Spaces that are more than just a place to sleep."
                                
                            />

                        </CarouselItem>
                    </Carousel>
                            
                    
                </div>

                
                  
                  

            
               
        
            
            
        </div>
    )
}

export default Home
