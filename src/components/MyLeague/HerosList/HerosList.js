import React from 'react';
import Hero from './Hero/Hero';
import './HerosList.css'

const Heros = ({heros,addHero}) => {

    return (
        // <h1>hello</h1>
        heros.map((hero)=>{
          return (
                  <Hero hero={hero} key={hero.id} addHero={addHero}></Hero>
          )
        })
    )
}

export default Heros;