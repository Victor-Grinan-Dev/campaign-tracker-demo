import React from 'react';

//redux
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRobotSay } from '../../features/portalSlice';

//component
import Token from '../token/Token';

const FormationCard = ({formation, fn}) => {

  const dispatch = useDispatch();

  const delForm = () => {
    dispatch(setRobotSay("Deleted!"));
  }
  const addToArmyHandler = (e) => {
    if(e.target.attributes[0].nodeValue === "selected"){
      e.target.attributes[0].nodeValue = "deselected";
      dispatch(setRobotSay("deleted from army"))

    }else{
      e.target.attributes[0].nodeValue = "selected";
      console.log(formation)
      dispatch(setRobotSay("added to army"));
      //dispatch(setCurrentUser({...user, "armyList": [...user.armyList]}))
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
        <div className="cardButtons">
          
          
          <button style={{fontSize:"10px", margin:"0", padding:"0"}} onClick={delForm} >
            <Link to={`${formation.name}`} state={formation}>ℹ️</Link>
          </button>

        </div>
      </div>
    </div>
  )
}

export default FormationCard;