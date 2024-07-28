import { combineReducers } from "redux";
import LoggedInController from "./usersSlice";



const rootReducer= combineReducers({
    loggedIn: LoggedInController,
})


export default rootReducer