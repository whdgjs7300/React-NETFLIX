import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import MovieCard from "../components/MovieCard";
import Review from "../components/Review";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [modalOn, setModalOn] = useState(false);
    const {detailList, reviewList, recommendList} = useSelector(state=>state.movie)
    const getMoviesDetail= () => {
        dispatch(movieAction.getDetail(id));
    }
    useEffect(()=>{
        getMoviesDetail();
    },[])
    console.log(recommendList)
    return ( 
        <div>
            <div>
                <h1>NETFLIX</h1>
                <div>
                    <span>{detailList?.title}</span>
                </div>
            </div>
                
                <div className="detail_Box" style={
            {
                backgroundImage:
        'url('+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailList.poster_path}`+')',
            }
        }>
                <DetailCard detailList={detailList}/>
                </div>
                
                
                {reviewList && <div>
                    <button onClick={()=>{
                        setModalOn(false);
                    }}>REVIEWS ({reviewList.results.length})</button>
                    <button onClick={()=>{
                        setModalOn(true);
                    }}>RELATED MOVIES</button>
                    </div> }
                
                <div className="review_Box">
                {   modalOn == false ? 
                    reviewList && reviewList.results.map((item)=>{
                        return <Review reviewList={item}/>
                    })
                    :
                    recommendList && recommendList.results.map((item)=>{
                        return <MovieCard item={item} />
                    })
                    
                }
                </div>
                
                
            
        </div>
    );
}

export default MovieDetail;