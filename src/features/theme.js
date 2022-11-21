import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = "";

export const customTheme = createSlice({
    name:"theme", 
    initialState: {value: initialStateValue}, 
    reducers: {
        changeTheme: (state, action)=>{
            state.value = action.payload
        }, 

    },
});

export const {changeTheme} = customTheme.actions

export default customTheme.reducer;