import React from 'react';
import './MyLeague.css'
import { useEffect, useState } from 'react';
import Heros from './Heros/Heros';
import AddHeros from './AddHeros/AddHeros';

const MyLeague = () => {

    const [ heros, setHeros] = useState([]);
    const [ myLeague, setMyLeague ] = useState([]);
    // let error = "";

    useEffect(()=>{
        fetch('heros.json').then(res=>res.json()).then(data=>setHeros(data))
    },[]);

    const addHero=(hero)=>{
        let league = [];

        const match = myLeague.find(myHero=>myHero.id===hero.id);
        if(match){
            alert("Sorry you have already added this hero in your team.");
        }
        else{
            if(!myLeague){
                league = [hero];
                setMyLeague(league);
            }
            else if(myLeague.length>3){
                alert("Sorry you can't add more then 4 heros in your team.");
            }
            else{
                const restLeague =myLeague;
                league = [...restLeague,hero];
                setMyLeague(league);
            }
        }
        console.log(myLeague);
    }
    return (
        <div className="display row g-0">
            <div className="col-md-8 row row-cols-lg-3 row-cols-md-2 mb-5 g-0">

                <Heros heros={heros} addHero={addHero}></Heros>
            </div>
            <div className="col-md-4 shadow">
                <AddHeros myLeague={myLeague}></AddHeros>
            </div>
        </div>
    );
};

export default MyLeague;