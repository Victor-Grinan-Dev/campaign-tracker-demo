import { createSlice } from "@reduxjs/toolkit";

export const portalSlice = createSlice({
    name:'portal',
    initialState:{
        isLogged:false,
        currentUser:undefined,

        //temp:
        search:"",
        isLoading:true,

        //createCard:
        creatingUnit:{},
        creatingFormation:{},

    },

    reducers:{
        //logged:
        setCurrentUser:(state, action) => {
            state.currentUser = action.payload;
        },

        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },

        setIsLoading:(state, action) => {
            state.isLoading = action.payload;
        },

        setSearch(state, action) {
            state.search = action.payload;
        },


        //unit:

        //formation

        //army:

    }
});

export const { 
    setCurrentUser,
    setIsLogged,
    setIsLoading,
    setSearch
} = portalSlice.actions;

export default portalSlice.reducer;