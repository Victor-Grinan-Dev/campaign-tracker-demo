import React from 'react';
import Tile from './Tile';

const MapReader = ({nestedArray, tileSize, action=null, showTilesId=false, topStart=0, leftStart=0}) => {

    const side = tileSize //width and length of a tile

    //logic variables:
    const evenLeftStart = leftStart + side * 0.5;
    const leftIncrementor = side - 0.9; //incrementor 
    const topIncrementor = side * 0.73; //incrementor 
    
    const handleLeft = (y, x) => {
        if(y % 2 === 0) {
            return leftStart + leftIncrementor * x
        } else {
            return evenLeftStart + leftIncrementor * x
        }
    }

  return (
    <div className="canvas"
    style={{
        height:`${nestedArray.length * tileSize}px`,
        width:`${nestedArray.length * tileSize}px`,
    }}
    >  
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