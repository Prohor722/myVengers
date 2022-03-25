import React from 'react';
import Hero from './Hero/Hero';
import './Heros.css'

const Heros = ({heros}) => {

    return (
        heros.map((hero)=>{
          return (
              <div className='d-flex flex-row'>
                  <Hero hero={hero}></Hero>
              </div>
          )
        }
        )
        
    )
}

export default Heros;