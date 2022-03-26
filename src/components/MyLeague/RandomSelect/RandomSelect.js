import React from 'react';
import RandomHero from './RandomHero/RandomHero';

const Random = ({hero}) => {
    if(hero.id){
        
        return (
            <div className='mt-5'>
                <p>Randomly Picked a Hero for You</p>
                <RandomHero hero={hero}></RandomHero>
            </div>
        );
    }
    else{
        return <div></div>
    }
};

export default Random;