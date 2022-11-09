import React from 'react';

import { Tile } from '../../classes/tile';
import { testMap } from '../warRoom/dummyMap';
import MapReader from './MapReader';

const DrawMap = () => {


  return (
    <div className='drawmap view'>
        <div className="panel">

        </div>
        <div className="canvas">
            {/* <MapReader nestedArray={testMap.map.map}/> */}
        </div>
    </div>
  )
}

export default DrawMap;