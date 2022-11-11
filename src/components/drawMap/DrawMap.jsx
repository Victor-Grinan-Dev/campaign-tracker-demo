import React, { useEffect } from 'react';

//image
import water from '../../assets/backgrounds/sea_sprite.jpg';//NOT WORKING

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setNestedArr } from '../../features/drawMapSlice';

//components
import MapReader from './MapReader';

//functions
import { hexTestMap, testMap } from '../warRoom/dummyMap';
import {canvasSquare, canvasHex, generateMap} from '../../functions/mapGenerator';

const testSqGen = canvasSquare("testSq", 15, 15);
const testHxGen = canvasHex("testHx", 4);



const DrawMap = () => {
  const mapName = useSelector(state=>state.drawMap.mapName);
  const nestedArr = useSelector(state=>state.drawMap.nestedArr);
  const shape = useSelector(state=>state.drawMap.shape);
  const dimension = useSelector(state=>state.drawMap.dimension);
  const maxPlayers = useSelector(state=>state.drawMap.maxPlayers);

  let chosenMap = generateMap(mapName, dimension, shape)

  const dispatch = useDispatch();

  useEffect(() => {
    
    //dispatch(setNestedArr())
  }, [
    dispatch,
    mapName,
    nestedArr,
    shape,
    dimension,
    maxPlayers,
  ]);

  return (
    <div className='drawmap view'>
        <div className="topPanel">
          <p>Name: New Map</p>
          <div className="topPanelButtons">
            <button>- zoom +</button>
            <button>width</button>
            <button>height</button>
            <button className='appButton'>shape</button>
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
        {<MapReader nestedArray={chosenMap.map} tileSize={50} shape={chosenMap.shape} mapObj={chosenMap}/> }
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
