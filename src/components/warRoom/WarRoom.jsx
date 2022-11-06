import React from 'react';
import { useSelector } from 'react-redux';
//import { Campaign } from '../../classes/campaign';

const WarRoom = () => {
    const user = useSelector(state => state.portal.currentUser);
  return (
    <div className='warRoom view'>

        <div className="camapigns">
            <h3>Available Campaigns</h3>
            <div>
            🗺️ campaign1 - 3/4 players  <button>Join</button> 
            </div>
            <div>
            🌎 campaign2 - 2/4 players  <button>Join</button> 
            </div>
            <div>
            🪐 campaign3 - 1/2 players  <button>Join</button> 
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