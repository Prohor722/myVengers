import React from 'react';
import MyHero from './MyHero/MyHero';

const AddHeros = ({myLeague,remove}) => {
    return (
        myLeague.map(hero=>{
            return <MyHero hero={hero} key={hero.id} remove={remove}></MyHero>
        })
    );
};

export default AddHeros;