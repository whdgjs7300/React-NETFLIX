import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import Review from "../components/Review";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {detailList, reviewList} = useSelector(state=>state.movie)
    const getMoviesDetail= () => {
        dispatch(movieAction.getDetail(id));
    }
    useEffect(()=>{
        getMoviesDetail();
    },[])
    console.log(detailList)
    return ( 
        <div>
            <div>
                <h1>NETFLIX</h1>
                <div>
                    <span>{detailList?.title}</span>
                </div>
            </div>
                

                
                <DetailCard detailList={detailList}/>
                {reviewList && <div>REVIEWS ({reviewList.results.length})</div> }
                
                <div className="review_Box">
                {
                    reviewList && reviewList.results.map((item)=>{
                        return <Review reviewList={item}/>
                    })
                }
                </div>
                
                
            
        </div>
    );
}

export default MovieDetail;