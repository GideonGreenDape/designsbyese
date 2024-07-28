import { configureStore } from "@reduxjs/toolkit";

import LoggedIn from "../Reducer/usersSlice";
import MenuSwitchSlice from "../Reducer/menuSlice";

const store= configureStore(
  {
    reducer: {
        loggedIn: LoggedIn,
        MenuSwitch: MenuSwitchSlice,
    }
  }
)


export default store;