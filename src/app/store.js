import { configureStore } from "@reduxjs/toolkit";
import portalReducer from '../features/portalSlice';
import drawMapReducer from '../features/drawMapSlice';
import unitReducer from '../features/unitSlice';
import formationReducer from '../features/formationSlice';

export default configureStore({
    //next line prevent error on: react_devtools_backend.js:4026 A non-serializable value was detected in an action, in the path: `payload`. Value: {object...}
    middleware: getDefaultMiddleware =>getDefaultMiddleware({ serializableCheck: false,}), 
    reducer:{
        portal: portalReducer,
        drawMap: drawMapReducer,
        formation: unitReducer,
        unit: formationReducer,
        }
});