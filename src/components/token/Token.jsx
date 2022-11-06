import { useEffect, useState } from 'react';
import { unitsImages } from '../../images/units';

function Token({formation, fn}) {

  const [color, setColor] = useState(formation.color);
  const [name, setName]= useState(formation.name);
  const [points, setPoints]= useState(formation.points);
  const [units, setUnits] = useState(formation.composition);
  const [unitCount, setUnitCount] = useState(formation.composition?.length);

  const showStats = false;
  useEffect(() => {
    setColor(formation.color);
    setName(formation.name);
    setPoints(formation.points);
    setUnits(formation.composition);
    setUnitCount(formation.composition?.length);
    
  }, []);
  
  const isBeen = formation.isBeen ? "grayscale(1)" : "grayscale(0)";
  
  return (
    <div 
    className="token"
    name="token"
    style={{
      backgroundColor: `${color}`
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
  )
}

export default Token;
