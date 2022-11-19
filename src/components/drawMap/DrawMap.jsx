import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//clases
import { Map } from '../../classes/map';

//image
import water from '../../assets/backgrounds/sea_sprite.jpg';//NOT WORKING

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setMapObj, setDimension, setTileSize, setBrush, setReset, setMaxPlayers, countDownStartPosLeft, setStartPosLeft } from '../../features/drawMapSlice';
import { setCurrentUser, setRobotSay } from '../../features/portalSlice';

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

  const robotSay = useSelector(state => state.portal.robotSay)
  const mapObj = useSelector(state=>state.drawMap.mapObj);
  const mapName = useSelector(state=>state.drawMap.mapObj.name);
  const shape = useSelector(state=>state.drawMap.mapObj.shape);
  const dimension = useSelector(state=>state.drawMap.dimension);
  const maxPlayers = useSelector(state=>state.drawMap.mapObj.maxPlayers);


  const tileSize = useSelector(state=>state.drawMap.tileSize);
  const brush = useSelector(state=>state.drawMap.brush);
  const reset = useSelector(state=>state.drawMap.reset);
  const startPosLeft = useSelector(state=>state.drawMap.startPosLeft);

  const currentUser = useSelector(state=>state.portal.currentUser);

  const [changingName, setChangingName] = useState(false);

  useEffect(() => {
    updateMap(generateMap(mapObj.name, dimension, mapObj.shape));
    dispatch(setRobotSay(""))
    // eslint-disable-next-line
  }, [
    dispatch,
    shape,
    dimension,
    reset,
  ]);

  useEffect(()=>{
    localStorage.setItem("portal", JSON.stringify(currentUser));
    dispatch(setRobotSay(""))
  },[currentUser]);

  const changeData = (e) => {
    dispatch(setMapObj({...mapObj, [e.target.name]:e.target.value}));
    dispatch(setRobotSay(""));
  }
  const updateMap = (map) => {
    const upDtatedPlayableTiles = setPlayableTiles(map);
    dispatch(setMapObj(upDtatedPlayableTiles));
    dispatch(setRobotSay(""))
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
     dispatch(setRobotSay(""));
  }

  const tileSizeHandler = (e) => {
    if(e.target.name === "+" && tileSize <= 200){
      dispatch(setTileSize(tileSize + 5));
    }
    else if (e.target.name === "-" && tileSize >= 15){
      dispatch(setTileSize(tileSize - 5));
    }
    dispatch(setRobotSay(""))
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
    dispatch(setRobotSay(""))
    
  }

  const randomizeHandler = () => {
    updateMap({...mapObj, "map": mapRandomizer(mapObj.map) });
    dispatch(setRobotSay(""))
  }

  const brushHandler = (e) => {
    if(terrainTypes[e.target.name]){
      dispatch(setBrush(terrainTypes[e.target.name]))
      setRobotSay("");
    }else if(e.target.name === "del"){
      dispatch(setBrush(e.target.name))
    }else{
      dispatch(setBrush(null))
      setRobotSay("No Brush selected");
    }
  };

  const clickTileHandler = (e) => {
    
    const newNestedArr = [];

    if(brush && brush !== "del" && brush !== "startingPos"){//click with a brush terrain
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
    }else if(brush === "del"){//clck with brusH del
      for (let row of mapObj.map){
        const newRow = [];
        for (let tile of row){
          if( tile.id === e.target.id ){
            newRow.push({...tile, "terrain": null})
          }
          else{
            newRow.push(tile);
          }
        }
        newNestedArr.push(newRow);
      }
      updateMap({...mapObj, "map":newNestedArr});
    }else if (brush === "startingPos" && startPosLeft > 0){
      dispatch(countDownStartPosLeft())
      for (let row of mapObj.map){
        const newRow = [];
        for (let tile of row){
          if( tile.id === e.target.id ){
            newRow.push({...tile, "isStartingPosition": true})
          }
          else{
            newRow.push(tile);
          }
        }
        newNestedArr.push(newRow);
        
      }
      //console.log(newNestedArr)
      updateMap({...mapObj, "map":newNestedArr});
    }
    //click with no selected brush
  }
  
  const resetHandler = () => {
   
    updateMap(generateMap(mapObj.name, dimension, mapObj.shape));
    setRobotSay("");
  }

  const changeNameOkButton = () => {
    setChangingName(false);
    setRobotSay("");
  }

  const setStartsHandler = () => {
    dispatch(setBrush("startingPos"))
  }

  const cancelHandler = () => {
        dispatch(setDimension("min"));
        dispatch(setMaxPlayers(2));
        dispatch(setTileSize(30));
        dispatch(setRobotSay(""))
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
    }else{
      dispatch(setRobotSay("Insuficient playable tiles ⛔"))
    }
    return result;
  }

  const nameValidator = () => {
    let result = false;
    
    if(
      mapName !== "Name Undefined" &&
      mapName.replace(/\s/g, '')
      ){
        result = true;
      }else{
        if(mapName === "Name Undefined"){
          dispatch(setRobotSay("Map needs a name ⛔"))
        }
        if(mapName.replace(/\s/g, '')){
          dispatch(setRobotSay("Empty map name ⛔"))
        }
      }
    
    return result;
  }

  const saveMapHandler = () => {
    
      if(nameValidator() && mapValidator()){   
        dispatch(setCurrentUser({...currentUser, "createdMaps":[...currentUser.createdMaps, mapObj]}));
        setRobotSay("Map has been saved!");
        //resetValues:
        resetHandler();
        setMapObj(new Map("Name", "Undefined", "min", []))
        setChangingName(false);

      }else{
        setRobotSay("Invalid Map ⛔");
      }
  }

  return (
    <div className='drawmap view'>
        <div>
          <p>🤖: {robotSay}</p>
        </div>
        
        <div className="topPanel">
          <div className="topArea panelSection">
    
            {
            changingName ? 
              <div>
                <input type="text" name="name" onChange={changeData}/>
                <button onClick={changeNameOkButton}>ok</button>
              </div> : 
              <p onClick={()=>setChangingName(true)}>Name: "{capitalStart(mapName)}"</p>
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
              <button onClick={changeData} name="shape" value={shape === "sq" ? "hx" : "sq"} className='appButton'>shape</button>
              <button onClick={resetHandler} name="shape" className='appButton'>reset</button>
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
          backgroundImage:`url(${water})`,
          backgroundSize:`${tileSize}px`
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
                <button name="del" onClick={brushHandler} className='appButton' >delete</button>
              </div>

            </div>

            <div className="featuresButton">
              <button onClick={setStartsHandler}>start</button>
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
