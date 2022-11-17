import React from 'react';
import { useEffect } from 'react';
import { Formation } from '../../classes/formation';
import CreateUnit from './CreateUnit';
import FormationCard from './FormationCard';

const creatingFormation = new Formation("-", [ ])

const CreateFormation = () => {

  useEffect(() => {
    
  }, []);
  return (
    <div className='create-formation view'>
        <h3>Create Formation:</h3>

        <div className="FormationPart">
            
            <div className="namingSection">
                <button> create </button>
                <input type="text" className='unitNameInput' placeholder='Name...'/>
                {/* 
                <select name="facrion">
                  <option value="" hidden>choose</option>
                </select>
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