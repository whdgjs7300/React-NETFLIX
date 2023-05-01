

let initialState = {
    getGenre : {},
    loading : true,
    genreListData : {},
    keyWord : "",
};


function filterReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_GENRE" :
            return {...state, getGenre : payload.getGenre}
        default :
            return {...state};    
    }
}

export default filterReducer;