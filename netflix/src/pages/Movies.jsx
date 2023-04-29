import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";
import { useState } from "react";


const Movies = () => {
    const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upComingMovies, pageList}= 
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


    console.log(pageList)
    console.log(activePage)

    return ( 
        <div>
<Pagination
    activePage={activePage}
    itemsCountPerPage={20}
    totalItemsCount={450}
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    itemClass="page-item"
    linkClass="page-link"
/>

</div>
    );
}

export default Movies;