import { useEffect } from 'react';
import { Range } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Dropdown from 'react-bootstrap/Dropdown';

const FilterBox = () => {
    const dispatch = useDispatch();
    const {getGenre} = useSelector(state=> state.filter)
    
    



    return ( 
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <h3>Genres</h3>
            
            
            {
                getGenre && getGenre.genres.map((item,i)=>{
                    return <Dropdown.Item href="#/action-2">
                        <button>{item.name}</button>
                    </Dropdown.Item>
                    
                })

            }
            
            
        </Dropdown.Menu>
    </Dropdown>
        
            
        
    );
}

export default FilterBox;