import React from 'react';
import Token from '../token/Token';
import { tilesImages } from '../../images/tiles';

const Tile = ({tileObj, func = null, showId=false}) => {

    //if there is no tile make a blank tile? 
    return (
        <div
        id={tileObj.id}
        className="tile"
        onClick={func} 
        style={{
          backgroundImage:`url(${tilesImages[tileObj.terrain.name]}`,
          backgroundSize: `${50}px ${56}px`,
          left:`${tileObj.posLeft}px`,
          top:`${tileObj.posTop}px`,
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

/*
    <div
    id={id}
    className={css.Tile}
    name="tile"
    onClick={detectClick} 
    style={{
      backgroundImage:`url(${tileImage})`, //not working
      left:`${posLeft}px`,
      top:`${posTop}px`,
    }}
    >
      <div className="tileContent" name="token">
        {showId && <p>{id}</p>}
        {formation && <Token formation={formation} /> }
       
      
        </div>

        {
          status === 'hostile' ? <div name={`filter_${status}`} className={css.tileFilter}
            style={{
              backgroundImage:`url(${filterImage})`,
            }} /> : null
        }
        {
          status === 'unexplored' ? <div name={`filter_${status}`} className={css.tileFilter}
            style={{
              backgroundImage:`url(${filterImage})`,
            }} /> : null
        }


        </div>
*/