import React from 'react';
import {side, topStart, leftStart, evenLeftStart, leftIncrementor, topIncrementor} from '../../data/mapConfig';
import Tile from './Tile';

const MapReader = ({nestedArray, action=null, showTilesId=false}) => {

    const mapAreaStyle = {
        position:"relative"
        //handle with dinamically from here
    }

    const handleLeft = (y, x) => {
        if(y % 2 !== 0) {
            return leftStart + leftIncrementor * x
        } else {
            return evenLeftStart + leftIncrementor * x
        }
    }

  return (
    <div className="mapArea" style={{mapAreaStyle}}>  
    {
         nestedArray.map((row, y) => (
             row.map((tile, x) => (       
                 tile.terrain && <Tile 
                    key={tile.id} 
                    id={tile.id}
                    tileObject={tile}

                    showId={showTilesId}
                    image={tile.terrain.image}  
                    posTop={topStart + topIncrementor * y} 
                    posLeft={handleLeft(y, x)} 
                    tileWidth={side} 
                    tileHeight={side + 5}
                    func={action}  

                    //game varible items
                    objective={tile.objective} 
                    formation={tile.formation}
                    status={tile.status}
                />
            ))
        ))
    }
</div>
  )
}

export default MapReader;