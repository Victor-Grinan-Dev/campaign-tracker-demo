import React from 'react';

const SectionGameRounds = ({changeData}) => {
  return (
    <div className="section" >
                <p className="sectionName" >Game rounds / Round duration:</p> 
                <div>
                <input type="number" name="rounds" placeholder="Rounds..." onChange={changeData} min="3" 
                className="numInput"/>
                <input type="number" name="duration" placeholder="Duration..." onChange={changeData} min="1" 
                className="numInput"/>
                <select name="timeLapse" id="">
                    <option value="null">Choose</option>
                    <option value="hours">hour(s)</option>
                    <option value="days">day(s)</option>
                    <option value="weeks">week(s)</option>
                    <option value="month">month(s)</option>

                </select>
                </div>
                <p className="sectionName" ></p> 
                
            </div>
  )
}

export default SectionGameRounds;