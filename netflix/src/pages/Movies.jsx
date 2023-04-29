import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";
import { useState } from "react";
import RelatedCard from "../components/RelatedCard";
import ClipLoader from "react-spinners/ClipLoader";



const Movies = () => {
    const dispatch = useDispatch();
    const {loading, pageList}= 
    useSelector(state=>state.movie);
    // 페이지 네이션 state
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (pageNumber) => {

    setActivePage(pageNumber);
};
    
    const getTotalMovies = () =>{
        dispatch(movieAction.getMovies(activePage));
    }

    // 페이지가 바뀔 때 마다 비동기 호출
    useEffect(()=>{
        getTotalMovies()
    },[activePage])

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            {
                pageList && pageList.results.map((item)=>{
                    return <RelatedCard item={item}/>
                })

            }
<Pagination
    activePage={activePage}
    itemsCountPerPage={20}
    totalItemsCount={2000}
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    itemClass="page-item"
    linkClass="page-link"
/>

</div>
    );
}

export default Movies;