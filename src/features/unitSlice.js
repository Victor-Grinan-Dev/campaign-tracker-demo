import { createSlice } from "@reduxjs/toolkit";
import { skills_by_unit_type } from "../data/skillsByUnitType";

export const unitSlice = createSlice({
    name:'unit',
    initialState:{
        unitObj:{},
        name:"",
        type:null,
        models: 0,
    }, 

    reducers:{
        setUnitObj(state, action){
            state.formationObj = action.payload;
        },
        setName(state, action){
            state.name = action.payload;
        },
        setType(state, action){
            state.type = skills_by_unit_type[action.payload];
        },
        setModels(state, action){
            state.composition = action.payload;
        },
    }
});

export const {
    setUnitObj,
    setName,
    setType,
    setModels,
} = unitSlice.actions;

export default unitSlice.reducer;