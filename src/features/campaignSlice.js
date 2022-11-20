import { createSlice } from "@reduxjs/toolkit";
import { Campaign } from "../classes/campaign";
import { testMap } from "../components/warRoom/dummyMap";

export const campaignSlice = createSlice({
    name:'campaign',
    initialState:{
        campaignObj: new Campaign(null, "undefined", 0, testMap, 0, "undefined"),

    }, 

    reducers:{
        setCampaignObj(state, action){
            state.campaignObj = action.payload;
        },
       
    }
});

export const {
    setCampaignObj,
} = campaignSlice.actions;

export default campaignSlice.reducer;