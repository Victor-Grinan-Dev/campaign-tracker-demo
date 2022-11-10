import React from 'react';

import { hexTestMap, testMap } from '../warRoom/dummyMap';
import MapReader from './MapReader';


const chosenMap = hexTestMap;
const DrawMap = () => {

  return (
    <div className='drawmap view'>
        <div className="panel">

        </div>
        <div className="screen">
        {<MapReader nestedArray={chosenMap.map} tileSize={30} shape={chosenMap.shape} /> }
        </div>
    </div>
  )
}

export default DrawMap;
