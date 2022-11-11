import React from 'react';

import water from '../../assets/backgrounds/sea_sprite.jpg';//NOT WORKING

import { hexTestMap, testMap } from '../warRoom/dummyMap';
import {canvasSquare, canvasHex} from '../../functions/mapGenerator';
import MapReader from './MapReader';

const testSqGen = canvasSquare("testSq", 15, 15);
console.log(testSqGen.map)
const chosenMap = testSqGen
const DrawMap = () => {

  return (
    <div className='drawmap view'>
        <div className="topPanel">
          <p>Name: New Map</p>
          <div className="topPanelButtons">
            <button>next terrain</button>
            <button>width</button>
            <button>height</button>
            <button>shape</button>
            <button>cancel</button>
            <button>reset tiles</button>
            <button>save map</button>
            <button>set all</button>
            <button>random all</button>
          </div>
       
        </div>
        <div className="screen"
        style={{
          backgroundColor:`url(${water})`,
        }}
        >
        {<MapReader nestedArray={chosenMap.map} tileSize={50} shape={chosenMap.shape} /> }
        </div>
        <div className="bottomPanel">
          <p>bottom panel</p>
          <div className="topPanelButtons">
            <div className="terrainButtons">
              <button>blank</button>
              <button>plains</button>
              <button>hills</button>
              <button>swamp</button>
              <button>city</button>
              <button>mountain</button>
            </div>

            <div className="featuresButton">
              <button>start</button>
              <button>flag</button>

              <button> building 1 </button>
              <button> building 2 </button>
              <button> building 3 </button>
            
            </div>

            <div>
              <button> hostile ai </button>
              <button> friendly ai </button>
            </div>
        
          </div>

          
        </div>
    </div>
  )
}

export default DrawMap;
