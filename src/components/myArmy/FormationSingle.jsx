import React from 'react';
import { useLocation } from 'react-router-dom';
import { capitalStart } from '../../functions/capitalStart';
import Token from '../token/Token';

const FormationSingle = () => {
  const location = useLocation();

  console.log(location.state)
  return (
    <div className='myArmy view'>

        <div>
          <Token formation={location.state} tokenSize={70}/>
        </div>

        <p>Description: {location.state.description ? location.state.description :"Null" }</p>
        <p>Faction: {location.state.faction.name}</p>
        <div className="dataDisplay">
        <div>
          <p>Composition:</p>      
            {
              location.state.composition.map((u, i) => (
                <p key={i}> - "{capitalStart(u.name)}" - models: {u.models}- {u.skills.type}</p>
              ))
            }
        </div>
             
          <p>Damage: {location.state.damage}</p>
          <p>Defense: {location.state.defense}</p>
          
          <p>infantry count: {location.state.infantry_count} models</p>
          <p>Intelligence: {location.state.intelligence < 1 ? "under average" : location.state.intelligence === 1 ? "average" : "over average"}</p>
          <p>Models count: {location.state.model_count}</p>
          <p>{location.state.name}</p>
          <p>{location.state.name}</p>
          <p>{location.state.name}</p>
          <p>{location.state.name}</p>
        </div>
        <p className="edit">✏️</p>
        <p className="del">❌</p>
    </div>
  )
}

export default FormationSingle;