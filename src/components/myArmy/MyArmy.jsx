import React from 'react';
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Formations from './Formations';



const MyArmy = () => {
  //const robotSay = useSelector(state=>state.portal.robotSay)
  return (
    <div className='myArmy view'>
      
      <div className="panel">
         <button>🪖✅</button>
          <Link to="/createformation"><button>+🪖</button></Link>

        <input type="text" placeholder='Search...' className='searchInput'/>
        
        
      </div>
      <Formations />
    </div>
  )
};

export default MyArmy;