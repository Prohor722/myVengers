import React from 'react';
import './AddHeros.css'
import MyHero from './MyHero/MyHero';

const AddHeros = ({myLeague}) => {
    return (
        myLeague.map(hero=>{
            return <MyHero hero={hero} key={hero.id}></MyHero>
        })
    );
};

export default AddHeros;