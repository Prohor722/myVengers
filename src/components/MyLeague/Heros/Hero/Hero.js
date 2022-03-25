import React from 'react';
import './Hero.css'

const Hero = ({hero,addHero}) => {
    return (
        <div className='hero'>
              <img src={hero.image} className="shadow" alt=""/>
              <p>{hero.name}</p>
              <p>${hero.price}</p>
              <button onClick={()=>{addHero(hero)}} className='add-btn'>Add In My League</button>
        </div>
    );
};

export default Hero;