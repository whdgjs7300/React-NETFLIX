

let initialState = {
    getGenre : [],

};


function filterReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_GENRE" :
            return {...state, getGenre : payload.getGenre}
    }
}

export default filterReducer;