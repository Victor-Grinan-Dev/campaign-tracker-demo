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
        <div>
            <button>create campaign</button> 
            <button> cancel </button>
        </div>
    </div>
  )
};

export default CreateCampaign


