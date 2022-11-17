import { createSlice } from "@reduxjs/toolkit";

export const formationsSlice = createSlice({
    name:'formation',
    initialState:{
        formationObj:{},
        name:"-",
        composition: [],
        s_description: "",
        l_description: "",
        faction: undefined,
        subfaction: "",
    }, 

    reducers:{
        setFormationObj(state, action){
            state.formationObj = action.payload;
        },
        setName(state, action){
            state.name = action.payload;
        },
        setComposition(state, action){
            state.composition = action.payload;
        },
        setS_description(state, action){
            state.s_description = action.payload;
        },
        setL_description(state, action){
            state.l_description = action.payload;
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
    setName,
    setComposition,
    setS_description,
    setL_description,
    setFaction,
    setSubfaction,
} = formationsSlice.actions;

export default formationsSlice.reducer;