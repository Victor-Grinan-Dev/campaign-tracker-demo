import React from 'react'

const CampaignCards = ({campaign}) => {
  return (
    
    <div>
        <p>{campaign.name}-{campaign.players}/{campaign.map.players}</p> <button>Join</button> <button>Details</button>
    </div>
  )
}

export default CampaignCards;

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