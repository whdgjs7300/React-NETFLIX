

let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading : true,
    genreList : [],
    detailList : {},
    
};


function movieReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_MOVIES_SUCCESS" :
            return {...state, 
            popularMovies : payload.popularMovies,
            topRatedMovies : payload.topRatedMovies,
            upComingMovies : payload.upComingMovies,
            loading: false,
            genreList : payload.genreList,
            detailList : payload.detailList,
            }
        case "GET_MOVIES_REQUEST" :
            return {...state, loading : true}
        case "GET_MOVIES_FAILURE" : 
            return {...state, loading : false}    
        default :
            return {...state};    
    }
}


export default movieReducer;