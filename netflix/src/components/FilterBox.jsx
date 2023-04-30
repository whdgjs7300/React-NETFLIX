import { useEffect } from 'react';
import { Range } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';

const FilterBox = () => {
    const dispatch = useDispatch();
    const {getGenre} = useSelector(state=> state.filter)
    
    useEffect(()=>{
        dispatch(movieAction.getFilter())
    },[])

    console.log(getGenre);

    return ( 
        <div>

        </div>
    );
}

export default FilterBox;