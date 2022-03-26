import React from 'react';
import RandomHero from './RandomHero/RandomHero';

const Random = ({hero}) => {
    if(hero.id){
        console.log('random',hero)
        return (
            <RandomHero hero={hero}></RandomHero>
        );
    }
    else{
        return <div></div>
    }
};

export default Random;