import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNations from "../components/PageNations";
import { movieAction } from "../redux/actions/movieAction";


const Movies = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upComingMovies, totalList}= 
    useSelector(state=>state.movie);
    
    const getTotalMovies = () =>{
        dispatch(movieAction.getMovies());
    }
    useEffect(()=>{
        getTotalMovies()
    },[])

    console.log(totalList)
    return ( 
        <div>

            
            <PageNations/>
        </div>
    );
}

export default Movies;