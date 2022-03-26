import React from 'react';
import './MyHero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const MyHero = ({hero,remove}) => {
    return (
        <div className='myHero'>
            <img src={hero.logo} className="" alt=""/>

            <div className='d-flex justify-content-center align-items-center g-0'>

                <p className='mt-3'>{hero.name}</p>
                <FontAwesomeIcon icon={faXmark} className="ms-1 btn" onClick={()=>remove(hero.id)}></FontAwesomeIcon>
                
            </div>
        </div>
    );
};

export default MyHero;