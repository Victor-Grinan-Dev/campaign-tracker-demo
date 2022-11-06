import React from 'react';
import { useSelector } from 'react-redux';
import { testCampign } from './dummyCampaign'; 


const allCamp = [ {...testCampign, "name":"camapign 1", "id": "🗺️"}, {...testCampign, "name":"camapign 2", "id": "🪐"}, {...testCampign, "name":"camapign 3", "id": "🌎"} ];

const WarRoom = () => {
    const user = useSelector(state => state.portal.currentUser);
  return (
    <div className='warRoom view'>

        <div className="camapigns">
            <h3>Available Campaigns</h3>
            {
                allCamp.map((c,i) => (
                    <CampaignCard campaign={c} key={i}/>
                ))
            }

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