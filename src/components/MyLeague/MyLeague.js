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

    let length = 0;
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
            // Checking if myLeague is empty 
            if(!myLeague){
                league = [hero];
                setMyLeague(league);
            }
            //Checking if more 4 heros or not
            else if(myLeague.length>3){
                alert("Sorry you can't add more then 4 heros in your team.");
            }
            //or myLeague already have some data in it
            else{
                const restLeague =myLeague;
                league = [...restLeague,hero];
                setMyLeague(league);
            }
        }
        // console.log(myLeague);
    }

    //random select functionality in my heros
    const random=()=>{
        if(myLeague.length<=1){
            alert("please first select some heros to pick one for you!")
        }
        else{
            const rand = Math.round(Math.random()*(myLeague.length-1));
            setRandomHero(myLeague[rand]);
        }
    }

    //Reset button functionality in myLeague
    const reset= () =>{
        setMyLeague([]);
    }

    //Remove from my league
    const remove = (id) =>{
        const filterList = myLeague.filter(hero=>hero.id!==id);
        setMyLeague(filterList);
    }
    return (
        <div className="display row g-0">

            {/* All heros List  */}
            <div className="col-md-8 row row-cols-lg-3 row-cols-md-2 mb-5 g-0">
                <HerosList heros={heros} addHero={addHero}></HerosList>
            </div>

            <div className="col-md-4 shadow">

                {/* Selected heros list  */}
                <h3 className='mt-3'>MY LEAGUE</h3>
                <div className='row row-cols-md-2 m-0'>
                    <AddHeros myLeague={myLeague} remove={remove}></AddHeros>
                </div>
                
                {/* Random Hero show section  */}
                <RandomSelect hero={randomHero}></RandomSelect>
                
                {/* Reset and Random button  */}
                <div className='mt-5 mb-3'>
                    <button className='btn reset' onClick={reset}>Reset</button>
                    <button className='btn random ms-3' onClick={random}>Random</button>
                </div>
            </div>
        </div>
    );
};

export default MyLeague;