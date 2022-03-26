import React from 'react';
import './MyHero.css'

const MyHero = ({hero}) => {
    return (
        <div className='myHero'>
            <img src={hero.logo} className="" alt=""/>
            <p>Name: {hero.name}</p>
        </div>
    );
};

export default MyHero;