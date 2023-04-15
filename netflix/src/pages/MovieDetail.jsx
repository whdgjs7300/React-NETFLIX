import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {detailList} = useSelector(state=>state.movie)
    console.log(detailList)
    const getMoviesDetail= () => {
        dispatch(movieAction.getMovies(id));
    }
    useEffect(()=>{
        getMoviesDetail();
    },[])
    
    return ( 
        <div>
            <div>
                <h1>NETFLIX</h1>
                <div>
                    <span>{detailList.title}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;