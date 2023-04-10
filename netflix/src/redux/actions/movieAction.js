import api from "../api";

const API_KEY=process.env.REACT_APP_API_KEY
console.log(API_KEY)
function getMovies() {
    // 미들웨어는 함수안에 함수를 return함
    // axios는 프론트, 백에서 둘다 쓰임(node.js에서 fetch가 쓰이지 않음)
    // API키 보호를 위해 .env 파일을 만들어 보관(중요한 정보 보호)
    // 환경설정을 위해 .gitignore 파일에 .env 파일을 생략시킴
    return async(dispatch)=>{
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

     //   let url = "/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
     //   let response = await fetch(url);
     //   let data = await response.json();

     //   let url2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1"
     //   let response2 = 


    //  let url3 = "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
    }
}

export const movieAction = {
    getMovies,
}