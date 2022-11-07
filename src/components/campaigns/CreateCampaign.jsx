import React from 'react';

const CreateCampaign = () => {

    const changeData = (e) => {
        if (e.target.name === "map"){
            setIsMap(true)
            const choice = available_maps.filter((map) => {
                return map.name === e.target.value
            })           
            setMap(choice[0]);  
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
    <div>
        <h3>Create Campaign</h3>
        <div>
            <button>create campaign</button> 
            <button> cancel </button>
        </div>
    </div>
  )
};
