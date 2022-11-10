import React from 'react';

import { Tile } from '../../classes/tile';
import { testMap } from '../warRoom/dummyMap';
import MapReader from './MapReader';

import { testTile } from './testTile';
import { tilesImages } from '../../images/tiles';

const tileSize = 30

const DrawMap = () => {

  return (
    <div className='drawmap view'>
        <div className="panel">

        </div>
        <div className="screen">
        {<MapReader nestedArray={testMap.map} tileSize={30}/> }
        </div>
    </div>
  )
}

export default DrawMap;


/* 
<div className="tile"
            style={{
              backgroundImage:`url(${tilesImages["hills"]})`,
              backgroundSize:`${tileSize}px ${tileSize}px`,
              width:`${tileSize}px`,
              height:`${tileSize}px`,
            }}
            ></div>
*/