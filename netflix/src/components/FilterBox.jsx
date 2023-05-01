import { useEffect } from 'react';
import { Range } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Dropdown from 'react-bootstrap/Dropdown';


const FilterBox = ({getGenre, pageList,activePage}) => {
    const dispatch = useDispatch();

    const handleButtonClick = (genreId) => {
        dispatch(movieAction.genreFilter(activePage,genreId))
    };
    console.log(activePage)
    return ( 
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <h3>Genres</h3>
            
            
            {
                getGenre && getGenre.map((item,i)=>{
                    return <Dropdown.Item >
                        <button onClick={()=>handleButtonClick(item.id)}>{item.name}</button>
                    </Dropdown.Item>
                    
                })

            }
            
            
        </Dropdown.Menu>
    </Dropdown>
        
            
        
    );
}

export default FilterBox;