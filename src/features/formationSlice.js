import { createSlice } from "@reduxjs/toolkit";

export const formationsSlice = createSlice({
    name:'formation',
    initialState:{
        formationObj:{
            name:"-",
            composition:[]
        },
        composition: [],
        faction: undefined,
        subfaction: "",
    }, 

    reducers:{
        setFormationObj(state, action){
            state.formationObj = action.payload;
        },
        setComposition(state, action){
            state.composition = action.payload;
        },
        setFaction(state, action){
            state.faction = action.payload;
        },

        setSubfaction(state, action){
            state.subfaction = action.payload;
        },
    }
});

export const {
    setFormationObj,
    setComposition,

    setFaction,
    setSubfaction,
} = formationsSlice.actions;

export default formationsSlice.reducer;