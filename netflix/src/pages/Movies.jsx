import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Pagination from "react-js-pagination";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import SortBox from "../components/SortBox";
import FilterBox from "../components/FilterBox";
import FilteredMovieList from "../components/FilteredMovieList";



const Movies = () => {
    const dispatch = useDispatch();
    const {loading,filterData ,withGenres, keyWord, sortBy}= 
    useSelector(state=>state.filter);
    

    
    // 페이지 네이션 state
    const [pageNum, setPageNum] = useState(1);
    // 선택 장르 id
    const [selectedGenreId, setSelectedGenreId] = useState(null);

    const handlePageChange = (pageNum) => {

    setPageNum(pageNum)
};

    
    const getTotalMovies = () =>{
        dispatch(movieAction.getFilteredMovies(selectedGenreId,sortBy,pageNum,keyWord));
    }
    
    const handleGenreChange = (withGenresID) => {

        setSelectedGenreId(withGenresID);
        dispatch(movieAction.getFilteredMovies(withGenresID,sortBy,pageNum,keyWord))
    };

    // 페이지, 장르id, sortBy, 검색키워드가 바뀔 때 마다 비동기 호출
    useEffect(()=>{
        getTotalMovies()

    },[pageNum,sortBy,selectedGenreId,keyWord])



    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            <div>
                <SortBox/>
                <FilterBox 
                pageNum={pageNum} withGenres={withGenres} 
                onGenreChange={handleGenreChange}/>
            </div>
            {
                filterData && filterData.results.map((item)=>{
                    return <FilteredMovieList item={item}/>
                })
            }

<Pagination
    activePage={pageNum}
    itemsCountPerPage={20}
    totalItemsCount={filterData ? filterData.total_results : 0} 
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    itemClass="page-item"
    linkClass="page-link"
/>

</div>
    );
}

export default Movies;