import { combineReducers } from "redux";
import auth from "./auth";
import createdEvent from "./events";

export default combineReducers({ auth: auth, createdEvent: createdEvent });
