import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},

}


const movieSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        getPopular(state, action) {
            state.popularMovies = action.payload.data          
        },
        getTopRate(state, action) {
            state.topRatedMovies = action.payload.data
        },
        getupComing(state, action) {
            state.upcomingMovies = action.payload.data
        }

    },
})
console.log(initialState.popularMovies)
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;