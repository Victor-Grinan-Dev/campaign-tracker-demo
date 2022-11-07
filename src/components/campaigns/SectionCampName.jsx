import React from 'react';

const SectionCampName = ({changeData}) => {
  return (
    <div className="section">
        <p className={css.sectionName}> Campaing Name: </p>
        <input type="text" name="campaignName" className='textImput' onChange={changeData} placeholder="Write a name..." />
    </div>
  )
}

export default SectionCampName;