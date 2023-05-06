

let initialState = {
    getGenre : {},
    loading : true,
    pageList : {},

};


function pageReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FILTER_MOVIE_SUCCESS" :
            return {...state, loading : false}
        case "GET_GENRE" :
            return {...state, getGenre : payload.getGenre}
        case "GET_PAGE_MOVIES" :
            return {...state, pageList : payload.pageList}
        case "GET_FILTER_MOVIE_REQUEST" :
            return {...state, loading : true}        
        case "GET_FILTER_MOVIE_FAILURE" : 
            return {...state, loading : false}     
        case "GET_CHANGE_FILLTER_DATA" :
            return {...state, pageList : payload.pageList}    
        case "GET_FILTER_GENRE" : {
            return {...state, pageList : payload.pageList}
        }     
        default :
            return {...state};    
    }
}

export default pageReducer;