import React from 'react';
import Hero from './Hero/Hero';

const Heros = ({heros,addHero}) => {

    return (
        heros.map((hero)=>{
          return (
                  <Hero hero={hero} key={hero.id} addHero={addHero}></Hero>
          )
        })
    )
}

export default Heros;