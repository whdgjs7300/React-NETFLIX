import { useEffect } from 'react';
import { Range } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Dropdown from 'react-bootstrap/Dropdown';


const FilterBox = ({getGenre, pageList,activePage, onGenreChange}) => {
    const dispatch = useDispatch();


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
                        <button onClick={()=>onGenreChange(item.id)}>{item.name}</button>
                    </Dropdown.Item>
                    
                })

            }
            
            
        </Dropdown.Menu>
    </Dropdown>
        
            
        
    );
}

export default FilterBox;