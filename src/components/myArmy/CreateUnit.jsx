import React from 'react';
import { skills_by_unit_type } from '../../data/skillsByUnitType';
import { unitsImages } from '../../images/units';

const CreateUnit = () => {
  return (
    <div>
        {
            skills_by_unit_type.map((item, i) => (
                console.log(item)
            ))
        }
    </div>
  )
}

export default CreateUnit;