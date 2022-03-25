import React from 'react';
import './MyLeague.css'
import { useEffect, useState } from 'react';
import Heros from './Heros/Heros';

const MyLeague = () => {

    const [ heros, setHeros] = useState([]);

    useEffect(()=>{
        fetch('heros.json').then(res=>res.json()).then(data=>setHeros(data))
    },[]);
    return (
        <div className="row g-0">
            <div className="col-md-8 row row-cols-md-3 mx-5">
                {/* <h1>My League</h1> */}
                <Heros heros={heros}></Heros>
            </div>
            <div className="col-md-4">
                <h1>Right</h1>
            </div>
        </div>
    );
};

export default MyLeague;