import React from 'react';
import Token from '../token/Token';

const FormationCard = ({formation}) => {
  return (
    <div className='cardFormation'>
      
      <div className="innerBound">

        <div className="titleArea">
          <p className='cardFormName'>{formation.name} </p>
          <div className="selected" />
        </div>

        <div className="imgBox">
          <p className="lvl">Lvl {formation.level}</p>
            <Token formation={formation}/>
        </div>

        <div className="details">
          <div className="detailKeys">
            <p className='formCardDetail'>Point cost: </p>
            <p className='formCardDetail'>Damage:</p>
            <p className='formCardDetail'>Defense:</p>
            
          </div>
          <div className="detailsValues">
            <p className='formCardDetail'>{formation.point_cost ? formation.point_cost : "-"}</p>
            <p className='formCardDetail'>{formation.damage ? formation.damage : "0"}</p>
            <p className='formCardDetail'>{formation.defense ? formation.defense : "0"}</p>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormationCard;