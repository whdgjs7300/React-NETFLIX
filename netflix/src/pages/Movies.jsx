import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";
import { useState } from "react";
import RelatedCard from "../components/RelatedCard";
import ClipLoader from "react-spinners/ClipLoader";
import SortBox from "../components/SortBox";
import FilterBox from "../components/FilterBox";
import FilteredMovieList from "../components/FilteredMovieList";



const Movies = () => {
    const dispatch = useDispatch();
    const {loading, pageList,getGenre }= 
    useSelector(state=>state.page);


    // 페이지 네이션 state
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (pageNumber) => {

    setActivePage(pageNumber);
};
    console.log(activePage)
    const getTotalMovies = () =>{
        dispatch(movieAction.getPage(activePage));
    }


    // 페이지가 바뀔 때 마다 비동기 호출
    useEffect(()=>{
        getTotalMovies()
    },[activePage])

    useEffect(()=>{
        dispatch(movieAction.genreFilter)
    },[])


    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            <div>
                <SortBox/>
                <FilterBox activePage={activePage} getGenre={getGenre} pageList={pageList}/>
            </div>
            {
                pageList && pageList.results.map((item)=>{
                    return <FilteredMovieList item={item}/>
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