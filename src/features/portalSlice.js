import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
    name:'portal',
    initialState:{
        isLogged:false,
        currentUser:{
            username:undefined,
            type:undefined
        },

        //temp:
        search:"",
        isLoading:true,
        robotSay:"",

    },

    reducers:{
        setCurrentUser:(state, action) => {
            state.currentUser = action.payload;
        },

        //temp:
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },

        setIsLoading:(state, action) => {
            state.isLoading = action.payload;
        },

        setSearch(state, action) {
            state.search = action.payload;
        },
        setRobotSay(state, action){
            state.robotSay = action.payload;
        },
    }
});

export const { 
    setCurrentUser,

    //temp:
    setIsLogged,
    setIsLoading,
    setSearch,
    setRobotSay,
} = portalSlice.actions;

export default portalSlice.reducer;