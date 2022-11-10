import React from 'react';
import {topStart, leftStart, evenLeftStart, leftIncrementor, topIncrementor} from '../../data/mapConfig';
import Tile from './Tile';

const MapReader = ({nestedArray, tileSize, action=null, showTilesId=false}) => {

    
    const handleLeft = (y, x) => {
        if(y % 2 !== 0) {
            return leftStart + leftIncrementor * x
        } else {
            return evenLeftStart + leftIncrementor * x
        }
    }

  return (
    <div className="canvas">  
        {
         nestedArray.map((row, y) => (
             row.map((tile, x) => (       
                 tile.terrain && <Tile 
                 
                    key={tile.id} 
                    id={tile.id}
                    tileObj={tile}

                    showId={showTilesId}
                    image={tile.terrain.image}  
                    posTop={topStart + topIncrementor * y} 
                    posLeft={handleLeft(y, x)} 

                    tileSize={tileSize} 
                    
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

/*
{
         nestedArray.map((row, y) => (
             row.map((tile, x) => (       
                 tile.terrain && <Tile 
                    key={tile.id} 
                    id={tile.id}
                    tileObj={tile}

                    showId={showTilesId}
                    image={tile.terrain.image}  
                    posTop={topStart + topIncrementor * y} 
                    posLeft={handleLeft(y, x)} 

                    tileSize={tileSize} 
                    
                    func={action}  

                    //game varible items
                    objective={tile.objective} 
                    formation={tile.formation}
                    status={tile.status}
                />
            ))
        ))
    }
*/