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
    const {loading,filterData ,withGenres, keyWord}= 
    useSelector(state=>state.filter);
    console.log(filterData)

    console.log(keyWord)
    // 페이지 네이션 state
    const [pageNum, setPageNum] = useState(1);
    const [selectedGenreId, setSelectedGenreId] = useState(null);

    const handlePageChange = (pageNum) => {

    setPageNum(pageNum)
};
// 하위 컴포넌트에서 전달받을수 있음 !!!! 이부분 수정해야함 잘 
    console.log(pageNum)
    const getTotalMovies = () =>{
        dispatch(movieAction.getFilteredMovies());
    }
    
    const handleGenreChange = (withGenresID) => {

        setSelectedGenreId(withGenresID);
        dispatch(movieAction.getFilteredMovies(withGenresID))
    };

    // 페이지가 바뀔 때 마다 비동기 호출
    useEffect(()=>{
        getTotalMovies()

    },[])



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