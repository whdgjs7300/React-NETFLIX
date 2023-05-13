import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import RelatedCard from "../components/RelatedCard";
import Review from "../components/Review";
import ClipLoader from "react-spinners/ClipLoader";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [modalOn, setModalOn] = useState(false);
    const {detailList, reviewList, recommendList, loading} = useSelector(state=>state.movie)
    const getMoviesDetail= () => {
        dispatch(movieAction.getDetail(id));
    }
    useEffect(()=>{
        getMoviesDetail();
    },[])
    // RelatedCard 컴포넌트 재렌더링시 genresList 값이 undefined 방지
    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[modalOn])



    
    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            <div className="title_Box">
                <h1>NETFLIX</h1>
                <div >
                    <span>{detailList?.title}</span>
                </div>
            </div>
                
            <div className="detail_Box">
                <div className="detail_img"
                style={
            {
                backgroundImage:
        'url('+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailList.poster_path}`+')',
            }
        }>
                </div>
                <div className="detail_info">
                    <DetailCard detailList={detailList}/>
                </div>
                
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
                        return <RelatedCard item={item} />
                    })
                    
                }
                </div>
                
                
            
        </div>
    );
}

export default MovieDetail;