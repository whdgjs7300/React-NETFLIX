import { useEffect } from 'react';
import { Range } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Dropdown from 'react-bootstrap/Dropdown';


const FilterBox = ({withGenres, pageList,pageNum, onGenreChange}) => {



    return ( 
        <Dropdown>
        <Dropdown.Toggle style={{width:250, height:50}}
                variant="danger" id="dropdown-basic">
            Filter
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark"
            style={{width:250,height:900,
            textAlign:"center",
            }}>
            <h3>Genres</h3>
            
            
            {
                withGenres && withGenres.map((item,i)=>{
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