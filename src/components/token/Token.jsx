import { useEffect, useState } from 'react';
import { unitsImages } from '../../images/units';

function Token({formation, fn}) {
  let unitCount = formation?.composition?.length;

  let size;

  switch (unitCount) {
    case 1:
      size = 60;
      break;
    case 2:
      size=40;
      break;
    case 3 || 4:
      size=30;
      break;
    case 5 || 6:
      size=20;
      break;
    case 7 || 8 || 9:
      size=15;
      break;
  
    default:
      break;
  }

  /* 
      const [color, setColor] = useState();
      const [subColor, setSubColor] = useState();
      const [name, setName]= useState();
      const [points, setPoints]= useState();
      const [units, setUnits] = useState();
      const [unitCount, setUnitCount] = useState();

    useEffect(() => {
      setColor(formation.color);
      setSubColor(formation.subColor);
      setName(formation.name);
      setPoints(formation.points);
      setUnits(formation.composition);
      setUnitCount(formation.composition?.length);
  }, []);
  */
  
  const isBeen = formation.isBeen ? "grayscale(1)" : "grayscale(0)";



  return (
    <div className="factionColor token"
    style={{
      backgroundColor: `${formation.color}`
    }}
    >
      <div 
          className="token"
          name="token"
          style={{
            backgroundColor: `${formation.subColor}`
          }}
          >
            {formation.composition ?
              formation.composition.map((unit) => {
                return <div 
                name={formation.name} 
                className="tokenIcon" 
                key={unit.id} 
                type={"tokenIcon"} 
                onClick={fn}
                style={{
                  backgroundImage:`url(${unitsImages[unit.skills.type]})`,
                  backgroundSize: `${size}px ${size}px`,
                  width: `${size}px`,
                  height: `${size}px`,
                  filter: `${isBeen}`,
              }} 
              /> 
              }): null
            }
          </div>
    </div>
    
  )
}

export default Token;
