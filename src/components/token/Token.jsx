import { useEffect, useState } from 'react';
import { unitsImages } from '../../images/units';

function Token({formation, fn}) {

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
          //onClick={activateToken}
          >
            {
              formation.composition.map((unit) => {
                return <div 
                name={formation.name} 
                className="tokenIcon" 
                key={unit.id} 
                type={"tokenIcon"} 
                onClick={fn}
                style={{
                  backgroundImage:`url(${unitsImages[unit.skills.type]})`,
                  backgroundSize: formation.unitCount===1 ? "50px 50px" : formation.unitCount===2 ? "30px 40px" : "30px 30px",
                  width: formation.unitCount===1 ? "50px" : formation.unitCount===2 ? "30px" : "30px",
                  height: formation.unitCount===1 ? "50px" : formation.unitCount===2 ? "40px" : "30px",
                  filter: `${isBeen}`,
              }} 
              /> 
              })
            }
          </div>
    </div>
    
  )
}

export default Token;
