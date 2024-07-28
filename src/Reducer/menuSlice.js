import { createSlice } from "@reduxjs/toolkit";


const initialState={
    menuState: false,
}


const MenuSwitchSlice= createSlice({
    name: 'MenuSwitch',
    initialState,
    reducers:{
       getSwitchState(state,action){
         if (state.menuState==false) {
           state.menuState= true;
        }
        else if (state.menuState == true) {
           state.menuState= false;
        }
       }
    }
})


export const {getSwitchState}= MenuSwitchSlice.actions;
export default MenuSwitchSlice.reducer;