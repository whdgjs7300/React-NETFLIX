import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},

}


const movieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers: {
        getPopular(state, action) {
            state.popularMovies = action.payload.data          
        },
        getTopRate(state, action) {
            state.topRatedMovies = action.payload.data
        },
        getUpComing(state, action) {
            state.upComingMovies = action.payload.data
        }

    },
})

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;