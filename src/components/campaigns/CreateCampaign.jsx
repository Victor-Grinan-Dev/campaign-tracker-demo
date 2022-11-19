import React from 'react';
import { Link } from 'react-router-dom';

//redux:
import { useDispatch, useSelector } from 'react-redux';
import { setCampaignObj } from '../../features/campaignSlice';


//classes
import { Campaign } from '../../classes/campaign';

//functions
import { capitalStart } from '../../functions/capitalStart';
import { genId } from '../../functions/genId';

//data
import { available_maps } from './dummy_availableMaps';

const CreateCampaign = () => {
    const dispatch = useDispatch();
    const campaignObj = useSelector(state => state.campaign.campaignObj);
    const choiceMap = useSelector(state => state.campaign.campaignObj.map);
    const userMaps = useSelector(state => state.portal.currentUser.createdMaps);


    const changeData = (e) => {
        //console.log(e.target.name, e.target.value)
        let data = e.target.value;
        if(e.target.name === "map"){
            console.log(JSON.parse(e.target.value));
        }
        console.log({...campaignObj,[e.target.name]:data})
        dispatch(setCampaignObj({...campaignObj,[e.target.name]:data}))
    };

    const saveCampaignData = (e) => {
        e.preventDefault()
        
        if(campaignObj.name && campaignObj.armySize && campaignObj.map){
            const toSaveCampaign = new Campaign(genId(), campaignObj.name, campaignObj.armySize, JSON.parse(campaignObj.map), campaignObj.rounds, campaignObj.timeLapse);

            console.log(toSaveCampaign)
        }
        //write to the data base the new campaign as a new object
    };

  return (
    <div className='createCampaign view'>
        <h3>Create Campaign</h3>

        <div className="section">
            <p className="sectionName"> Campaing Name: </p>
            <input type="text" name="name" className='textImput' onChange={changeData} placeholder="Write a name..." />
        </div>

        <div className="section">
            
            <p className="sectionName">Army size:</p>      
            <select name="armySize" defaultValue="100" onChange={changeData}>

                <option value="" hidden>Choose</option>
                <option value="100" >100pts</option>
                <option value="200" >200pts</option>
                <option value="300" >300pts</option>
                <option value="100" >400pts</option>
                <option value="100" >500pts</option>
                <option value="100" >750pts</option>
                <option value="100" >1000pts</option>
                <option value="100" >1250pts</option>
                <option value="100" >1500pts</option>
                <option value="100" >1750pts</option>
                <option value="100" >2000pts</option>

            </select>

            <input type="number" name="armySize" className='numInput' placeholder='Write a num'/>
        
        </div>
        
        <div className="section" >
            <p className="sectionName" >Rounds:</p> 
                
            <input type="number" name="rounds" placeholder="Rounds..." onChange={changeData} min="4" className="numInput"/>
                        
            <p className="sectionName"  >Duration:</p>
            <select name="timeLapse" onChange={changeData}>

                <option value="" hidden>Choose</option>
                <option value="hours">hour(s)</option>
                <option value="days">day(s)</option>
                <option value="weeks">week(s)</option>
                <option value="month">month(s)</option>

            </select>
        </div>

        <div className="mapSection section">
        
            <div className="flexRow subSection mapSelect">

                <label className="sectionName">Available maps: </label>
                <select onChange={changeData} name="map">  
                    <option value="" hidden>Choose</option>    
                        {
                            available_maps.map((map, i) => (
                                <option value={JSON.stringify(map)} key={i} >{map.name}</option>
                            ))
                        }   

                        {
                            userMaps && userMaps.map((map,i) => (
                                <option value={JSON.stringify(map)} key={i} >{capitalStart(map.name)}</option>
                            ))
                        }                    
                </select > 
            </div>

            <div className="flexColumn subSection ">
                
                <p>Map name: {choiceMap.name ? <>"{capitalStart(choiceMap.name)}"</> : "undefined" }</p>
                <p>Shape: {choiceMap ? choiceMap.shape : "undefined" }</p>
                <p>Dimensions: {choiceMap ? choiceMap.dimensions : "undefined" }</p>
                <p>max players: {choiceMap ? choiceMap.maxPlayers : "undefined" }</p>
                
            </div>

            <div className="flexColumn subSection">
                
                    <p className="sectionName">Display Map:</p> 
                    ⚠️ Upcoming feature   
                
            </div>
    
            <div className="subSection">
                
                 <Link to="/drawmap"> Draw a map in blank canvas </Link> 
            </div>

    </div>
    
                    
       

        <div className="section">
            <button onClick={saveCampaignData}>create campaign</button> 
            <button> cancel </button>
        </div>
    </div>
  )
};

export default CreateCampaign;


