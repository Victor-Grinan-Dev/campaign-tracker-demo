import React, { useState } from 'react'
import { available_maps } from './dummy_availableMaps';

const CreateCampaign = () => {
    const [choiceMap, setChoiceMap] = useState();
    const [data, setData] = useState();

    const changeData = (e) => {
        if (e.target.name === "map"){
            const choice = available_maps.filter((map) => {
                return map.name === e.target.value
            })           
            setChoiceMap(choice[0]);  
            setData({ ...data, playersAmount: choice[0].maxPlayers });
        }else{
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const saveCampaignData = (e) => {
        e.preventDefault()
        console.table("Saved Camapign")
        //write to the data base the new campaign
    };

  return (
    <div className='createCampaign view'>
        <h3>Create Campaign</h3>

        <div className="section">
            <p className="sectionName"> Campaing Name: </p>
            <input type="text" name="campaignName" className='textImput' onChange={changeData} placeholder="Write a name..." />
        </div>

        <div className="section">
            
        <p className="sectionName">Army size:</p>      
        <select name="armySize" defaultValue="100" onChange={changeData}>

            <option value="" hidden>Choose</option>
            <option value="100" >100pts</option>
            <option value="100" >200pts</option>
            <option value="100" >300pts</option>
            <option value="100" >400pts</option>
            <option value="100" >500pts</option>
            <option value="100" >750pts</option>
            <option value="100" >1000pts</option>
            <option value="100" >1250pts</option>
            <option value="100" >1500pts</option>
            <option value="100" >1750pts</option>
            <option value="100" >2000pts</option>
            <option value="100" >2500pts</option>
            <option value="100" >3000pts</option>
            <option value="100" >4000pts</option>
            <option value="100" >5000pts</option>

        </select>
        
    </div>

        <div className="section" >
            <p className="sectionName" >Rounds:</p> 
            
            <input type="number" name="rounds" placeholder="Rounds..." onChange={changeData} min="3" className="numInput"/>
                    
            <p className="sectionName" >Duration:</p>
            <select name="timeLapse" id="">

                    <option value="null">Choose</option>
                    <option value="hours">hour(s)</option>
                    <option value="days">day(s)</option>
                    <option value="weeks">week(s)</option>
                    <option value="month">month(s)</option>

            </select>
        </div>

        <div className="mapSection section">
        
            <div className="flexRow subSection">

                <label className="sectionName">Available maps: </label>
                <select onChange={changeData}>  
                    <option value="" hidden>Choose</option>    
                        {
                            available_maps.map((map, i) => (
                                <option value={map} key={i} >{map.name}</option>
                            ))
                        }                        
                </select > 
            </div>

            <div className="flexColumn subSection ">
                
                <p>Map name: {choiceMap ? choiceMap.name : "undefined" }</p>
                <p>Shape: {choiceMap ? choiceMap.shape : "undefined" }</p>
                <p>Dimensions: {choiceMap ? choiceMap.dimensions : "undefined" }</p>
                <p>max players: {choiceMap ? choiceMap.maxPlayers : "undefined" }</p>
                
            </div>

            <div className="flexColumn subSection">
                
                    <p className="sectionName">Display Map:</p> 
                    ⚠️ Upcoming feature   
                
            </div>
    
            <div className="subSection">
                link to Draw a map in blank canvas
                {/* <Link to="/drawmap"> Draw a map in blank canvas </Link> */}
            </div>

    </div>
    
                    
       

        <div className="section">
            <button onClick={saveCampaignData}>create campaign</button> 
            <button> cancel </button>
        </div>
    </div>
  )
};

export default CreateCampaign


