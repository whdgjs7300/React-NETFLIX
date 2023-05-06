

let initialState = {
    keyWord : "",
    loading : true,
    sortBy : "",
    withGenres: "",
    filterData : {},

};


function pageReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FILTER_MOVIE_SUCCESS" :
            return {...state, loading : false, filterData : payload.filterData}
        case "GET_GENRES_LIST" :
            return {...state, withGenres : payload.withGenres}
        case "GET_FILTER_MOVIE_REQUEST" :
            return {...state, loading : true}        
        case "GET_FILTER_MOVIE_FAILURE" : 
            return {...state, loading : false}     
        
        default :
            return {...state};    
    }
}

export default pageReducer;