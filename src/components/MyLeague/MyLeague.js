import React from 'react';
import './MyLeague.css'
import { useEffect, useState } from 'react';
import HerosList from './HerosList/HerosList';
import AddHeros from './AddHeros/AddHeros';
import RandomSelect from './RandomSelect/RandomSelect';

const MyLeague = () => {

    const [ heros, setHeros] = useState([]);
    const [ myLeague, setMyLeague ] = useState([]);
    const [ randomHero, setRandomHero ] = useState({});

    //fetching data from heros.json
    useEffect(()=>{
        fetch('heros.json').then(res=>res.json()).then(data=>setHeros(data))
    },[]);

    //adding hero to myLeague
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

    //random select functionality in my heros
    const random=()=>{
        if(myLeague.length<=1){
            alert("please first select some heros to pick one for you!")
        }
        else{
            const rand = Math.round(Math.random()*(myLeague.length-1));
            setRandomHero(myLeague[rand]);
            console.log('myLeague',randomHero);
        }
    }

    
    return (
        <div className="display row g-0">
            <div className="col-md-8 row row-cols-lg-3 row-cols-md-2 mb-5 g-0">
                <HerosList heros={heros} addHero={addHero}></HerosList>
            </div>
            <div className="col-md-4 shadow">
                <h3 className='mt-3'>My League</h3>
                <div className='row row-cols-md-2 m-0'>
                    <AddHeros myLeague={myLeague}></AddHeros>
                </div>
                    <RandomSelect hero={randomHero}></RandomSelect>
                <div className='mt-5'>
                    <button className='btn reset'>Reset</button>
                    <button className='btn random ms-3' onClick={random}>Random</button>
                </div>
            </div>
        </div>
    );
};

export default MyLeague;