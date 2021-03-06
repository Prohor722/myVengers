import React from 'react';
import './RandomHero.css'

const RandomHero = ({hero}) => {
    return (
        <div className='randomHero'>
              <img src={hero.image} className="shadow" alt=""/>
              <p>{hero.name}</p>
        </div>
    );
};

export default RandomHero;