import React from "react";

const Card = ({ item }) => {            
           // destructuring props
           return (
            

            <>
              
                
                {
                  item.map(({id,image,title,github,demo})=>{
                    return(
                    <article key={id} className='portfolio-item'>
                      <div className='portfolio_item-image'>
                        <img src={image} alt='IMG1'/>
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio-item-cta">
                        <a href={github} className='btn'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                    </article>
                    )
                  })
                }
              
              
            </>
          
  );
};
 
export default Card;