import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/actions/movieAction";


const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upComingMovies}= 
    useSelector(state=>state.movie);
    
    

    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[])
    // useEffect 특성상 밑에 값이 undefined가 뜸 
    // 조건부 렌더링을 꼭해야함!
    return ( 
        <div>
            {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
            <h1>popular Movie</h1>
            <MovieSlide/>
            <h1>Top rated Movie</h1>
            <h1>upcoming Movie</h1>

        </div>
    );
}

export default Home;