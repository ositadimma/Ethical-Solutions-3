import React from 'react';
import './Home.css';
import Card from './Card'
import Banner from './Banner'
import Carousel, { CarouselItem } from "./Carousel";


// ES7 snippets to do 'rfce'

function Home() {
    
  const data = [
    {
        id: 1,
        title:"Outdoor getaways", 
        img: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
        desc: "",

    },

    {
        id: 2,
        title:"Unique Stays", 
        img: "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",
        desc: "",

    },

    {
        id: 3,
        title:"Beach Resorts", 
        img: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",
        desc: "",

    },

    

    
]
    

  
    return (
        <div className='home'>


            <Banner/>
             <div className="mobile">
             <div className="image">
                <img src="assets/beach.jpg" alt="destinations" />
            </div>
            <div className="mobile-contents">
                <div className="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text"  placeholder="Where are you going"/>
                </div>
                <div className="text">
                    <h4>Not sure where to go?</h4>
                    <h4>Perfect.</h4>
                </div>
                <div className="button">
                    <button><p>I'm flexible</p>

                    </button>
                </div>
            </div>
                
             </div>
                <div className='home__section'>
                {data.map((d)=>(
                    <Card
                    src={d.img}
                    title={d.title}
                    description={d.desc}
                    
                    />
                ))}

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
