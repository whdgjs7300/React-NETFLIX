import { useEffect } from 'react';
import { Range } from 'react-range';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import Dropdown from 'react-bootstrap/Dropdown';


const FilterBox = ({getGenre, pageList}) => {
    const dispatch = useDispatch();

    


    return ( 
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <h3>Genres</h3>
            
            
            {
                getGenre.id && getGenre.map((item,i)=>{
                    return <Dropdown.Item href="#/action-2">
                        <button onClick={
                            dispatch({type: "GET_CHANGE_FILLTER_DATA", 
                        payload : {
                            pageList : pageList.results.filter((pageList)=>{
                                return item.id == pageList.genre_ids
                            })
                        }})
                        } >{console.log(item)}</button>
                    </Dropdown.Item>
                    
                })

            }
            
            
        </Dropdown.Menu>
    </Dropdown>
        
            
        
    );
}

export default FilterBox;