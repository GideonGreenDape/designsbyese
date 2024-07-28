import { createSlice } from "@reduxjs/toolkit";


const initialState =
{
    loggedInState: false,
    username: 'Sign In'
}


const LoggedIn = createSlice(
    {
        name: 'loggedIn',
        initialState,
        reducers: {
            getLoginState(state, action) {
                return state;
            },
            updateLoginState(state, action) {
                const { username } = action.payload;
                state.loggedInState = !state.loggedInState;
                state.username = username;
            }
        }
    }
)

export const { getLoginState, updateLoginState } = LoggedIn.actions;
export default LoggedIn.reducer;