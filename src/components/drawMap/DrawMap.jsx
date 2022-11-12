import React, { useEffect } from 'react';

//image
import water from '../../assets/backgrounds/sea_sprite.jpg';//NOT WORKING

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setMapObj, setShape, setDimension, setTileSize } from '../../features/drawMapSlice';

//components
import MapReader from './MapReader';

//functions
import { hexTestMap, testMap } from '../warRoom/dummyMap';
import {canvasSquare, canvasHex, generateMap, mapRandomizer} from '../../functions/mapGenerator';

//data
import { terrainTypes } from '../../data/terrainTypes.js'

const testSqGen = canvasSquare("testSq", 9, 9);
const testHxGen = canvasHex("testHx", 4);


const DrawMap = () => {
  const dispatch = useDispatch();

  const mapObj = useSelector(state=>state.drawMap.mapObj);
  const mapName = useSelector(state=>state.drawMap.mapName);
  const shape = useSelector(state=>state.drawMap.shape);
  const dimension = useSelector(state=>state.drawMap.dimension);
  const maxPlayers = useSelector(state=>state.drawMap.maxPlayers);
  const tileSize = useSelector(state=>state.drawMap.tileSize);

  useEffect(() => {
    dispatch(setMapObj(generateMap(mapName, dimension, shape)));
  }, [
    dispatch,
    shape,
    dimension,
  ]);

  const shapeHandler = (e) => {
    if(shape === "sq"){
      dispatch(setShape("hx"));
    }else if(shape === "hx"){
      dispatch(setShape("sq"));
    }
  }

  const dimensionHandler = (e) => {
    const [x, y] = dimension.split("x");
     if (e.target.name === "width"){
      dispatch(setDimension(`${parseInt(e.target.value, 10)}x${y}`))
     }else if(e.target.name === "heigth"){
      dispatch(setDimension(`${x}x${parseInt(e.target.value, 10)}`))
     }else{
      dispatch(setDimension(`${parseInt(e.target.value, 10)}`))
     }
  }

  const tileSizeHandler = (e) => {
    if(e.target.name === "+" && tileSize <= 200){
      dispatch(setTileSize(tileSize + 5));
    }
    else if (e.target.name === "-" && tileSize >= 15){
      dispatch(setTileSize(tileSize - 5));
    }
  }

  const setAllHandler = (e) => {
    const newArr = [];
    const oldArr = mapObj.map;

    for (let row of oldArr){
      const newRow = [];
      for (let tile of row){
        if (tile.terrain){
          newRow.push({...tile, "terrain": terrainTypes[e.target.value]})
        }else{
          newRow.push(tile)
        }
      }
      newArr.push(newRow);
    }
    dispatch(setMapObj({...mapObj, "map": newArr}));
  }

  const randomizeHandler = () => {
    dispatch(setMapObj({...mapObj, "map": mapRandomizer(mapObj.map) }));
  }

  return (
    <div className='drawmap view'>
        <div className="topPanel">
          <div className="topArea">
          <div className="nameArea">
            <p>Name: New Map</p>
          </div>
          <div className="mainButtons">
            <button>save</button>
            <button>cancel</button>
          </div>
          </div>
          <div className="topPanelButtons">
            <button name="-" onClick={tileSizeHandler} className="appButton">-</button>
             <>zoom</> 
            <button name="+" onClick={tileSizeHandler} className="appButton">+</button>
          {
            shape === "sq" ? <div className="dimensionArea"> 
              <select name="width" onChange={dimensionHandler} className="appButton">
              <option value="" hidden>width</option>
                <option value="9">9</option>
                <option value="11">11</option>
                <option value="13">13</option>
                <option value="15">15</option>
                <option value="17">17</option>
                <option value="21">21</option>
                <option value="23">23</option>
                <option value="25">25</option>
              </select> 
              <select name="heigth" onChange={dimensionHandler} className="appButton">
              <option value="" hidden>heigth</option>
                <option value="9">9</option>
                <option value="11">11</option>
                <option value="13">13</option>
                <option value="15">15</option>
                <option value="17">17</option>
                <option value="21">21</option>
                <option value="23">23</option>
                <option value="25">25</option>
              </select>
            </div> :
            <select name="hexSide" onChange={dimensionHandler} className="appButton">
                <option value="" hidden>Dimension</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="9">9</option>
                <option value="11">11</option>
                <option value="13">13</option>
            </select>
          }
            <button className='appButton' onClick={shapeHandler} >shape</button>

            <select onChange={setAllHandler} className='appButton'>
              <option value="" hidden>set all tiles</option>
              <option value="blank" >blank</option>
              <option value="plains" >plains</option>
              <option value="hills" >hills</option>
              <option value="forest" >forest</option>
              <option value="swamp" >swamp</option>
              <option value="mountains" >mountains</option>
              <option value="city" >city</option>
            </select>
            <button onClick={randomizeHandler} className='appButton' >randomize</button>
          </div>
       
        </div>
        <div className="screen"
        style={{
          backgroundColor:`url(${water})`,
        }}
        >
        {<MapReader nestedArray={mapObj.map} tileSize={tileSize} shape={mapObj.shape} mapObj={mapObj}/> }
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
