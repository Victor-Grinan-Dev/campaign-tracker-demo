import React from 'react';
import { useSelector } from 'react-redux';
import { Campaign } from '../../classes/campaign';

const WarRoom = () => {
    const user = useSelector(state => state.portal.currentUser);
  return (
    <div className='warroom view'>WarRoom

        <div className="camapigns">
            <div>
                campaign1 - 3/4 players  <button>Join</button> 
            </div>
            <div>
                campaign2 - 2/4 players  <button>Join</button> 
            </div>
            <div>
                campaign2 - 1/2 players  <button>Join</button> 
            </div>
        </div>
        {user.type === "admin" && <div>
            <button>create campaign</button>
        </div>}
    </div>
  )
}

export default WarRoom;