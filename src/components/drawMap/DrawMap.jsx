import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//image
import water from '../../assets/backgrounds/sea_sprite.jpg';//NOT WORKING

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setMapObj, setMapName, setShape, setDimension, setTileSize, setBrush, setReset, setMaxPlayers } from '../../features/drawMapSlice';
import { setCurrentUser } from '../../features/portalSlice';

//components
import MapReader from './MapReader';

//functions
import {capitalStart} from '../../functions/capitalStart.js'
import { generateMap, mapRandomizer} from '../../functions/mapGenerator';

//data
import { terrainTypes } from '../../data/terrainTypes.js'

const DrawMap = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const mapObj = useSelector(state=>state.drawMap.mapObj);
  const mapName = useSelector(state=>state.drawMap.mapName);
  const shape = useSelector(state=>state.drawMap.shape);
  const dimension = useSelector(state=>state.drawMap.dimension);
  const maxPlayers = useSelector(state=>state.drawMap.maxPlayers);
  const tileSize = useSelector(state=>state.drawMap.tileSize);
  const brush = useSelector(state=>state.drawMap.brush);
  const reset = useSelector(state=>state.drawMap.reset);

  const currentUser = useSelector(state=>state.portal.currentUser);

  const [changingName, setChangeinName] = useState(false);
  const [ errMsg, setErrMsg] = useState("");

  useEffect(() => {
    updateMap(generateMap(mapName, dimension, shape))
    // eslint-disable-next-line
  }, [
    dispatch,
    shape,
    dimension,
    reset,
  ]);

  const updateMap = (map) => {
    const upDtatedPlayableTiles = setPlayableTiles(map);
    dispatch(setMapObj(upDtatedPlayableTiles));
    setErrMsg("")
  }
  
  const shapeHandler = () => {
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
    updateMap({...mapObj, "map": newArr})
    
  }

  const randomizeHandler = () => {
    updateMap({...mapObj, "map": mapRandomizer(mapObj.map) });
  }

  const brushHandler = (e) => {
    dispatch(setBrush(terrainTypes[e.target.name]))
    setErrMsg("");
  }

  const clickTileHandler = (e) => {
    const newNestedArr = [];
    for (let row of mapObj.map){
      const newRow = [];
      for (let tile of row){
        if( tile.id === e.target.id ){
          newRow.push({...tile, "terrain": brush})
        }
        else{
          newRow.push(tile);
        }
      }
      newNestedArr.push(newRow);
    }
    updateMap({...mapObj, "map":newNestedArr});
  }

  const resetHandler = () => {
     dispatch(setReset())
     setErrMsg("");
  }

  const nameHandler = (e) => {
     dispatch(setMapName(e.target.value));
     setErrMsg("");
  }

  const changeNameOkButton = () => {
    setChangeinName(false);
    setErrMsg("");
  }

  const cancelHandler = () => {
        dispatch(setMapName("Name Undefined"));
        dispatch(setShape("sq"));
        dispatch(setDimension("min"));
        dispatch(setMaxPlayers(2));
        dispatch(setTileSize(30));
        navigate("/createcampaign");
  }
  const setPlayableTiles = (mapObj) => {
    let playableTiles = 0;
    for(let row of mapObj.map){
      for (let tile of row){
        if (tile.terrain && tile.terrain.name !== "mountains" && tile.terrain.name !== "blank"){
            playableTiles += 1;
        }
      }
    }
    return {...mapObj,"playableTiles": playableTiles}
  }
  const mapValidator = () => {
    let result = false;

    if(mapObj.playableTiles / mapObj.totalTiles * 100 > 50){
      result = true;
    }
    return result;
  }

  const nameValidator = () => {
    let result = false;
    
    if(
      mapObj.name !== "Name Undefined" &&
      mapObj.name.replace(/\s/g, '')
      ){
        result = true;
      }

    return result;
  }

  const saveMapHandler = () => {
    
      if(nameValidator() && mapValidator()){
        dispatch(setCurrentUser({...currentUser, "createdMaps":[...currentUser.createdMaps, mapObj]}));
        setErrMsg("Map has been saved!");
        localStorage.setItem("portal", JSON.stringify(currentUser));
      }else{
        setErrMsg("Invalid Map");
      }
  }
  return (
    <div className='drawmap view'>
        <div>
          <p>🤖: {errMsg}</p>
        </div>
        
        <div className="topPanel">
          <div className="topArea panelSection">
    
            {
            changingName ? 
              <div>
                <input type="text" onChange={nameHandler}/>
                <button onClick={changeNameOkButton}>ok</button>
              </div> : 
              <p onClick={()=>setChangeinName(true)}>Name: "{capitalStart(mapName)}"</p>
            }
            
            <div className="mainButtons">
              <button className='appButtonGreen' onClick={saveMapHandler}>save</button>
              <button onClick={cancelHandler} className="appButtonDanger">cancel</button>
            </div>
          </div>
            
            <div className="midTopPanel panelSection">
            new canvas: 
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
              <button onClick={resetHandler} className='appButton'>reset</button>
          </div>

        <div className="bottomTopPanel panelSection">
  
          <button name="-" onClick={tileSizeHandler} className="appButton">-</button>
             <>zoom</> 
          <button name="+" onClick={tileSizeHandler} className="appButton">+</button>

            <select onChange={setAllHandler} className='appButton'>
              <option value="" hidden>set all tiles</option>
              <option value="blank" >blank</option>
              <option value="plains" >plains</option>
              <option value="hills" >hills</option>
              <option value="forest" >forest</option>
              <option value="swamp" >swamp</option>
              <option value="mountains" >mountain</option>
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
        {<MapReader nestedArray={mapObj.map} tileSize={tileSize} shape={mapObj.shape} mapObj={mapObj} action={clickTileHandler}/> }
        </div>
        <div className="bottomPanel">
          <p>Brush:</p>
          <div className="topPanelButtons">
            <div className="terrainButtons">
              
              <button name="plains" onClick={brushHandler} className='appButton' >plains</button>
              <button name="hills" onClick={brushHandler} className='appButton' >hills</button>
              <button name="forest" onClick={brushHandler} className='appButton' >forest</button>
              <button name="swamp" onClick={brushHandler} className='appButton' >swamp</button>
              <button name="city" onClick={brushHandler} className='appButton' >city</button>
              <button name="mountains" onClick={brushHandler} className='appButton' >mountain</button>

              <div>
                <button name="blank" onClick={brushHandler} className='appButton' >blank</button>
                <button name={null} onClick={brushHandler} className='appButton' >delete</button>
              </div>

            </div>

            <div className="featuresButton">
              <button>start</button>
              <button>flag</button>

              {/*
              <button> building 1 </button>
              <button> building 2 </button>
              <button> building 3 </button>
              */}
            
            </div>

              {/*
              <div>
                <button> hostile ai </button>
                <button> friendly ai </button>
              </div>
              */}
        
          </div>

          
        </div>
    </div>
  )
}

export default DrawMap;
