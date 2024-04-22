import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name : 'home',
    initialState : {
        url : {},
        genres : {},
    },

    reducers : {
        getApiConfiguration : (state,action)=>{
             state.url = action.payload;
        },
        getGenres : (state,action)=>{
            state.genres = action.payload;
        },
    }
})

const {getApiConfiguration,getGenres} = homeSlice.actions;
export {getApiConfiguration,getGenres};
export default homeSlice.reducer;
