import React from 'react';
import { useSelector } from 'react-redux';
import { testCampign } from './dummyCampaign'; 
import CampaignCard from './CampaignCard';

const allCamp = [ {...testCampign, "name":"chorizo mix", "id": "🗺️"}, {...testCampign, "name":"king of the hill", "id": "🪐"}, {...testCampign, "name":"40k Brawl", "id": "🌎"} ];

const WarRoom = () => {
    const user = useSelector(state => state.portal.currentUser);
  return (
    <div className='warRoom view'>
        <div className="campaignArea">
        <h3>Available Campaigns</h3>
            <div className="camapigns">
                
                {
                    allCamp.map((c,i) => (
                        <CampaignCard campaign={c} key={i}/>
                    ))
                }

            </div>
        </div>
        
        {user.type === "admin" && <div>
            <div>
                <button> Create New Campaign 🗺️ 🪐 🌎</button>
                
            </div>
            
        </div>}
    </div>
  )
}

export default WarRoom;