import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {detailList} = useSelector(state=>state.movie)
    const getMoviesDetail= () => {
        dispatch(movieAction.getMovies(id));
    }
    useEffect(()=>{
        getMoviesDetail();
    },[])
    
    return ( 
        // 부트스트랩으로 설정
        <div>
            <div>
                <h1>NETFLIX</h1>
                <div>
                    <span>{detailList?.title}</span>
                </div>
            </div>

            <div>
                <div>
                    <img src={`:https//www.themoviedb.org/t/p/w300_and_h450_bestv2${detailList.backdrop_path}`} alt="" />
                    <h2>장르</h2>
                    <p>연령</p>
                    <p>설명</p>
                </div>
                
                <DetailCard/>
            </div>
            <div>리뷰박스</div>
            
        </div>
    );
}

export default MovieDetail;