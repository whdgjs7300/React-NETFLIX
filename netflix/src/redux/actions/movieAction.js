import api from "../api";
import {movieActions} from '../reducer/movieReducer'


const API_KEY=process.env.REACT_APP_API_KEY

function getMovies() {
    // 미들웨어는 함수안에 함수를 return함
    // axios는 프론트, 백에서 둘다 쓰임(node.js에서 fetch가 쓰이지 않음)
    // API키 보호를 위해 .env 파일을 만들어 보관(중요한 정보 보호)
    // 환경설정을 위해 .gitignore 파일에 .env 파일을 생략시킴
    // api를 동시에 처리하고 싶을 때  promise
    return async(dispatch)=>{
        // 로딩스피너 
        // 첫번째 api 설정
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        // 두번째 api 설정
        const topRateApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        // 세번째 api 설정
        const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        


    //  let url3 = "/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
    // 매개변수로 배열을 받음    
    // 여러가지의 api를 한번에 호출
    // await를 위에 호출할 때 쓰지않고 promise.all함수를 통해 한번에 통일시킴
    
    let [popularMovies, topRatedMovies, upComingMovies] = 
    await Promise.all([popularMovieApi, topRateApi, upComingApi])
    
        dispatch({
            type : "GET_MOVIES_SUCCESS",
            payload : 
            {
            popularMovies : popularMovies.data,
            topRatedMovies : topRatedMovies.data,
            upComingMovies : upComingMovies.data,
            }
        })

        
    }
    
}

export const movieAction = {
    getMovies,
}