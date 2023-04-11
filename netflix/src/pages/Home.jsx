import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";


const Home = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upcomingMovies}= useSelector(state=>state.movie);
    console.log(popularMovies, topRatedMovies, upcomingMovies)
    

    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[])

    return ( 
        <div>
            Home
        </div>
    );
}

export default Home;