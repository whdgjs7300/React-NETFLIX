

let initialState = {
    keyWord : "",
    loading : true,
    sortBy : "",
    withGenres: "",
    
};


function pageReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FILTER_MOVIE_SUCCESS" :
        
        default :
            return {...state};    
    }
}

export default pageReducer;