import React from 'react';

const SectionPlayers = () => {
    let players = data.map.maxPlayers
  return (
    
        
     
            <div className={css.section} >
                <p className={css.sectionName}>Amount of players:</p>    
                <div className='flexRow'>
                <div>
                    <input type="number" name="playersAmount" max={players} min={2} onChange={changeData} placeholder="Choose" className='numInput'/> 
                </div>
                <div className='extraInfo'>                    
                    <p>max: {players}</p>
                    <p>min: {2}</p>
                </div>
                </div>        
                
            </div>
       
    
  )
}

export default SectionPlayers;