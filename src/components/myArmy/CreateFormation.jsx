import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formation } from '../../classes/formation';
import { setFormationObj } from '../../features/formationSlice';
import CreateUnit from './CreateUnit';
import FormationCard from './FormationCard';


const CreateFormation = () => {

  const nameFormation = useSelector(state => state.formation.name)
  const composition = useSelector(state => state.formation.composition);
  const creatingFormation = useSelector(state => state.formation.formationObj);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormationObj(new Formation("-", [ ])))
  }, []);

  useEffect(() => {
    const newFormation = new Formation(nameFormation, composition);
    dispatch(setFormationObj(newFormation));
  }, [composition]);

  const updateFormation = (e) => {
    dispatch(setFormationObj({...creatingFormation, [e.target.name]: e.target.value}))
  }
  
  return (
    <div className='create-formation view'>
        <h3>Create Formation: {/* creatingFormation.name === '-' ? 'Name...?' : creatingFormation.name */}</h3>

        <div className="FormationPart">
            
            <div className="namingSection" style={{overflow:'scroll'}}>
              <div>
                <button>Add</button>
                  <input type="text" className='unitNameInput' name='name' placeholder={creatingFormation.name === '-' ? 'Name...' : creatingFormation.name} onChange={updateFormation}/>
                  <select name="faction">
                    <option value="" hidden></option>
                  </select>
              </div>
              
                {/* 
                ⚔️🥾
                action_points(pin):1
                ⚒️ work_force(pin):0
                🗡️🎯💥☠️damage(pin):null
                🛡️defense(pin):0
                model_count(pin):0
                👀🔭vision(pin):1
                Xp(pin):0
                actions(pin):
                🧠🎓intelligence(pin):1
                📊level(pin):0
                🎁benefits(pin):
                🏅badges(pin):
                🥾movement(pin):100
                maxMovement(pin):100
                📚dedication(pin):
                color(pin):"white"
                subColor(pin):"white"
                is_listed(pin):false
                📈point_cost(pin):0
                🎒carry_capacity(pin):0
                🕴🖩🧮infantry_count(pin):0
                isBeen(pin):false
                isMoved(pin):false
                name(pin):"-"
                composition(pin):
                s_description(pin):""
                l_description(pin):""
                🏴󠁧󠁢󠁥󠁮󠁧󠁿🚩faction(pin):""
                subfaction(pin):""


                <p className='createFormInfoAtrr'> work_force: {creatingFormation.work_force} </p>
                <p className='createFormInfoAtrr'> model_count: {creatingFormation.model_count} </p>
                <p className='createFormInfoAtrr'> actions: { creatingFormation.actions ? creatingFormation.actions : "-"} </p>
                <p className='createFormInfoAtrr'> benefits: { creatingFormation.benefits ? creatingFormation.benefits : "-"} </p>
                <p className='createFormInfoAtrr'> movement: {creatingFormation.movement === 100 ? 0 :creatingFormation.movement} </p>
                <p className='createFormInfoAtrr'> maxMovement: {creatingFormation.maxMovement === 100 ? 0 :creatingFormation.maxMovement} </p>
                <p className='createFormInfoAtrr'> dedication: {creatingFormation.dedication} </p>
                <p className='createFormInfoAtrr'> carry_capacity: {creatingFormation.carry_capacity} </p>
                <p className='createFormInfoAtrr'> infantry_count: {creatingFormation.infantry_count} </p>
                */}
            </div>

            <FormationCard formation={creatingFormation}/>
        </div>
        
        <CreateUnit />
    </div>
  )
}

export default CreateFormation;