import { combineReducers, configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./HomeReducer/HomeReducer";
import OwnerReducer from "./OwnerReducer/OwnerReducer";
const rootReducer = combineReducers({ home: HomeReducer, owner: OwnerReducer })

const store = configureStore({ reducer: rootReducer });
export default store;