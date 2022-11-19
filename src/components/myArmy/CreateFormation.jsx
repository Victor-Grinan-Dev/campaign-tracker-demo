import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formation } from '../../classes/formation';
import { setComposition, setFaction, setFormationObj } from '../../features/formationSlice';
import CreateUnit from './CreateUnit';
import FormationCard from './FormationCard';
import { factions } from '../../data/factions';
import { factionsArr } from '../../data/factions';
import { setCurrentUser, setRobotSay } from '../../features/portalSlice';

const CreateFormation = () => {
  const user = useSelector(state=>state.portal.currentUser);
  const robotSay = useSelector(state=> state.portal.robotSay);
  
  const composition = useSelector(state => state.formation.composition);
  const creatingFormation = useSelector(state => state.formation.formationObj);

  const faction = useSelector(state =>state.formation.faction);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("portal", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const newFormation = new Formation(creatingFormation.name, composition, faction);
    dispatch(setFormationObj(newFormation));
    // eslint-disable-next-line
  }, [composition, faction]);

  const updateFormation = (e) => {
    dispatch(setFormationObj({...creatingFormation, [e.target.name]: e.target.value}))
  }
  const updateFaction = (e) => {
    const key = e.target.value.split("The ")[1].replace(" ","_").toLowerCase();
    dispatch(setFaction(factions[key]));
  }

  const clickOutUnitHandler = (e) => {

     let newComposition = [];   

    newComposition = composition.filter(u => {
      return u.id !== e.target.id;
    });

    dispatch(setComposition(newComposition))
  }

  const addFormation = () => {

    if (creatingFormation.name && creatingFormation.name !== "-" && creatingFormation.faction && creatingFormation.description && creatingFormation.composition.length > 0){
      //console.log(JSON.parse(
      dispatch(setCurrentUser({...user,"formations":[...user.formations, creatingFormation]}));
      
      localStorage.setItem("portal", JSON.stringify(user));
      dispatch(setRobotSay("saved formation"));
     /*
      if(JSON.stringify(localStorage.getItem("portal", JSON.stringify(user))).formations.includes(creatingFormation)){
        
      }else{
        dispatch(setRobotSay("try again something went wrong"));
      }
     */
    }else{
      if(!creatingFormation.name){
       dispatch(setRobotSay("Formations needs a name"))     
      }else if(creatingFormation.name === "-"){
       dispatch(setRobotSay("Incorrect name of formation"))       
      }else if(!creatingFormation.faction){
       dispatch(setRobotSay("A faction is required"))     
      }else if(!creatingFormation.description){
       dispatch(setRobotSay("Write a short description"))     
      }else if(creatingFormation.composition.length <= 0){
        dispatch(setRobotSay("a formation needs at least one unit"))    
      }
    }
  }
  return (
    <div className='create-formation view'>
        <h3>Create Formation: {/* creatingFormation.name === '-' ? 'Name...?' : creatingFormation.name */}</h3>

        <div className="FormationPart">
            
            <div className="namingSection" style={{overflow:'scroll'}}>
              <div>
                <p>🤖: {robotSay}</p>
                <button onClick={addFormation}>Add</button>
                  <input type="text" className='unitNameInput' name='name' placeholder={creatingFormation.name === '-' ? 'Name...' : creatingFormation.name} onChange={updateFormation}/>
                  <select name="faction" onChange={updateFaction}>
                    <option value="" hidden>Choose...</option>
                    {
                      factionsArr.map((f,i)=>(
                        <option value={f} key={i}>{f.split("The ")[1]}</option>
                      ))
                    }
                  </select>

                  <textarea name="description" id="" cols="30" rows="3" placeholder='Short description...' onChange={updateFormation}/>
                  
              </div>
              <div className="sideData">
                <div className="keys">
                  <p className='createFormInfoAtrr'>🕴🚙Model count:</p>
                  <p className='createFormInfoAtrr'>👯👯Infantry count:</p>
                </div>
                <div className="values">
                  <p className='createFormInfoAtrr'>{creatingFormation.model_count}</p>
                  <p className='createFormInfoAtrr'>{creatingFormation.infantry_count}</p>
                </div>
              </div>

              {/*
              <div className="sideData">
                <div className="keys">
                <p className='createFormInfoAtrr'>⚒️work force</p>
                <p className='createFormInfoAtrr'>👀vision</p>
                <p className='createFormInfoAtrr'>🧠intelligence</p>
                <p className='createFormInfoAtrr'>🎒carry capacity</p>
                
                </div>
                <div className="values">
                <p className='createFormInfoAtrr'>{creatingFormation.work_force}</p>
                <p className='createFormInfoAtrr'>{creatingFormation.vision}</p>
                <p className='createFormInfoAtrr'>{creatingFormation.intelligence}</p>
                <p className='createFormInfoAtrr'>{creatingFormation.carry_capacity}</p>
                </div>
              </div>
              */}

                {/* 
                ⚔️🥾🗡️🎯💥☠️🛡️🔭🎓📚📈🧮🏴󠁧󠁢󠁥󠁮󠁧󠁿🚩📊🎁🏅
                faction(pin):""
                color(pin):"white"

                subfaction(pin):""
                subColor(pin):"white"

                is_listed(pin):false

                s_description(pin):""
                l_description(pin):""
                */}
            </div>

            <FormationCard formation={creatingFormation} fn={clickOutUnitHandler}/>
        </div>
        
        <CreateUnit />
    </div>
  )
}

export default CreateFormation;