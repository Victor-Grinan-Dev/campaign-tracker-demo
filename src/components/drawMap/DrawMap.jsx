import React from 'react';

import { Tile } from '../../classes/tile';
import { hexTestMap, testMap } from '../warRoom/dummyMap';
import MapReader from './MapReader';

const tileSize = 30

const DrawMap = () => {

  return (
    <div className='drawmap view'>
        <div className="panel">

        </div>
        <div className="screen">
        {<MapReader nestedArray={hexTestMap.map} tileSize={30} shape={hexTestMap.shape} /> }
        </div>
    </div>
  )
}

export default DrawMap;
