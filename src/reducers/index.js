import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import artistReducer from "./artists-reducer";

export default combineReducers({ authReducer, artistReducer });
