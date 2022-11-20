import React from 'react';
import Token from '../token/Token';

const FormationCard = ({formation, fn}) => {

  const delForm = () => {
    console.log("deleted!");
  }
  const addToArmyHandler = (e) => {
    if(e.target.attributes[0].nodeValue === "selected"){
      e.target.attributes[0].nodeValue = "deselected";
    }else{
      e.target.attributes[0].nodeValue = "selected";
      console.log(formation)
    }
    
  }
  return (
    <div className='cardFormation'>
      
      <div className="innerBound">

        <div className="titleArea">
          <p className='cardFormName'>{formation.name} </p>

          <div className="selected" onClick={addToArmyHandler}/>

        </div>

        <div className="imgBox">
          <p className="lvl">Lvl {formation.level}</p>
          {/* <p className="xpbar">XP {formation.xp}</p> */}
            <Token formation={formation} fn={fn}/>
        </div>

        <div className="details">
          <div className="detailKeys">
            <p className='formCardDetail'>Point cost: </p>
            <p className='formCardDetail'>Damage:</p>
            <p className='formCardDetail'>Defense:</p>
            <p className='formCardDetail'>Movement:</p>
            
          </div>
          <div className="detailsValues">
            <p className='formCardDetail'>{formation.point_cost}</p>
            <p className='formCardDetail'>{formation.damage}</p>
            <p className='formCardDetail'>{formation.defense}</p>
            <p className='formCardDetail'>{formation.movement === 100 ? 0 : formation.movement }</p>
            
          </div>
          
        </div>
        <div>
          <p style={{fontSize:"10px"}} onClick={delForm} >❌</p>
        </div>
      </div>
    </div>
  )
}

export default FormationCard;