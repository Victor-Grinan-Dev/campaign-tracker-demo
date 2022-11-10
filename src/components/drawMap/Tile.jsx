import React from 'react';
import Token from '../token/Token';
import { tilesImages } from '../../images/tiles';

const Tile = ({tileObj, posTop, posLeft, func = null, showId=false, tileSize}) => {

    console.log(tileObj)
    //if there is no tile make a blank tile? 
    
    return (
        <div
        id={tileObj?.id}
        className="tile"
        onClick={func} 
        style={{
          backgroundImage:`url(${tilesImages[tileObj.terrain.name]}`,
          backgroundSize: `${tileSize}px ${tileSize + 5}px`,
          width:`${tileSize}px`,
          height:`${tileSize + 5}px`,
          left:`${posLeft}px`,
          top:`${posTop}px`,
          position:"absolute"
        }}
        >
          <div className="tileContent">
            {showId && <p>{tileObj.id}</p>}
            {tileObj.formation && <Token formation={tileObj.formation} />}
          </div>
          
        </div>
      )
    }
    

export default Tile;
