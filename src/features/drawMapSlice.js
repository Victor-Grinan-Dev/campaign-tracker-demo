import { createSlice } from "@reduxjs/toolkit";

export const drawMapSlice = createSlice({
    name:'drawMap',
    initialState:{
        mapName:"Name Undefined",
        nestedArr:[],
        shape:"sq",
        dimension:"5x5",
        maxPlayers:2,
    }, 

    reducers:{
        setMapName(state, action){
            state.mapName = action.payload;
        },
        setNestedArr(state, action){
            state.nestedArr = action.payload;
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
    }

});

export const {
    setMapName,
    setNestedArr,
    setShape,
    setDimension,
    setMaxPlayers,
} = drawMapSlice.actions;

export default drawMapSlice.reducer;