import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
    name:'unit',
    initialState:{
        name:"",
        models: 0,
        point_cost:0,
        type:'infantry',
    }, 

    reducers:{
        setName(state, action){
            state.name = action.payload;
        },

        setModels(state, action){
            state.models = action.payload;
        },

        setPoint_cost(state, action){
            state.point_cost = action.payload;
        },

        setType(state, action){
            state.type = action.payload;
        },
    }
});

export const {
    setName,
    setPoint_cost,
    setModels,
    setType,
} = unitSlice.actions;

export default unitSlice.reducer;