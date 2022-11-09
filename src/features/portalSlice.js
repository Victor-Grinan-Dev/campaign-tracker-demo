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

        //create:
        creatingUnit:{},
        creatingFormation:{},
        creatingCampaign:{},
        creatingMapObj:{},
        creatingMapArr:[],
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
        setCreatingUnit(state, action){
            state.creatingUnit = action.payload;
        },
        //formation
        setCreatingFormation(state, action){
            state.creatingFormation = action.payload;
        },
        //army:

        //campaign:
        setCreatingCampaign(state, action){
            state.creatingCampaign = action.payload;
        },
        //map
        setCreatingMapObj(state, action){
            state.creatingMapObj = action.payload;
        },
        setCreatingMapArr(state, action){
            state.creatingMapArr = action.payload;
        },
    }
});

export const { 
    setCurrentUser,
    setIsLogged,
    setIsLoading,
    setSearch,

    setCreatingUnit,
    setCreatingFormation,
    setCreatingCampaign,
    setCreatingMapObj,
    setCreatingMapArr,

} = portalSlice.actions;

export default portalSlice.reducer;