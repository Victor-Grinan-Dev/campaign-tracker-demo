import { createSlice } from "@reduxjs/toolkit";
import { generateMap } from '../functions/mapGenerator';

export const drawMapSlice = createSlice({
    name:'drawMap',
    initialState:{
        mapObj:generateMap("Name Undefined", "min", "sq" ),
        mapName:"Name Undefined",
        shape:"sq",
        dimension:"min",
        maxPlayers:2,

        tileSize:30,
    }, 

    reducers:{
        setMapObj(state, action){
            state.mapObj = action.payload;
        },
        setMapName(state, action){
            state.mapName = action.payload;
        },
        setShape(state, action){
            state.shape = action.payload;
        },
        setDimension(state, action){
            state.dimension = action.payload;
        },
        setMaxPlayers(state, action){
            state.maxPlayers = action.payload;
        },

        setTileSize(state, action){
            state.tileSize = action.payload;
        },
    }

});

export const {
    setMapObj,
    setMapName,
    setShape,
    setDimension,
    setMaxPlayers,
    setTileSize,
} = drawMapSlice.actions;

export default drawMapSlice.reducer;