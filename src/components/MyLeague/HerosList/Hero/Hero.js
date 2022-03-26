import React from 'react';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Hero = ({hero,addHero}) => {
    return (
        <div className='hero'>

              <img src={hero.image} className="shadow" alt=""/>
              <p>{hero.name}</p>
              <p>${hero.price}</p>

              <button onClick={()=>{addHero(hero)}} className='add-btn'>Add In My League
              <FontAwesomeIcon icon={faPlus} className="ps-3"></FontAwesomeIcon>
              </button>
              
        </div>
    );
};

export default Hero;