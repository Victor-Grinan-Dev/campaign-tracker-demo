import { useEffect, useState } from 'react';
import { unitsImages } from '../../images/units';

function Token({formation, fn}) {

  const [color, setColor] = useState();
  const [subColor, setSubColor] = useState();
  const [name, setName]= useState();
  const [points, setPoints]= useState();
  const [units, setUnits] = useState();
  const [unitCount, setUnitCount] = useState();

  const showStats = false;
  useEffect(() => {
    setColor(formation.color);
    setSubColor(formation.subColor);
    setName(formation.name);
    setPoints(formation.points);
    setUnits(formation.composition);
    setUnitCount(formation.composition?.length);
    
  }, []);
  
  const isBeen = formation.isBeen ? "grayscale(1)" : "grayscale(0)";
  
  return (
    <div className="factionColor token"
    style={{
      backgroundColor: `${color}`
    }}
    >
      <div 
          className="token"
          name="token"
          style={{
            backgroundColor: `${subColor}`
          }}
          //onClick={activateToken}
          >
            {
              units?.map((unit) => {
                return <div 
                name={name} 
                className="tokenIcon" 
                key={unit.id} 
                type={"tokenIcon"} 
                onClick={fn}
                style={{
                  backgroundImage:`url(${unitsImages[unit.skills.type]})`,
                  backgroundSize: unitCount===1 ? "50px 50px" : unitCount===2 ? "30px 40px" : "30px 30px",
                  width:unitCount===1 ? "50px" : unitCount===2 ? "30px" : "30px",
                  height: unitCount===1 ? "50px" : unitCount===2 ? "40px" : "30px",
                  filter: `${isBeen}`,
              }} 
              /> 
              })
            }
            
            {showStats && <p>{points}</p>}
          </div>
    </div>
    
  )
}

export default Token;
