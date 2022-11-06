import React from 'react';
import { capitalStart } from '../../functions/capitalStart';

const CampaignCard = ({campaign}) => {
  return (
    <div className="campaignCard">
        <p>{campaign.id}-{capitalStart(campaign.name)}</p>
        <p> - Players: {campaign.players.length}/{campaign.map.maxPlayers}</p> 
        <p> - Map Name: {campaign.map.name} </p>
        <p> - Map Size: {campaign.map.dimensions} </p>
        <button>Join 🔗</button>
        <button>Info 🛈</button>
    </div>
  )
}

export default CampaignCard;

/* 
isStarted
isEnded
rules
players
turn
phase
savedMap
campaignId
name
armySize
map
availableFactions
rounds
timeLapse
*/