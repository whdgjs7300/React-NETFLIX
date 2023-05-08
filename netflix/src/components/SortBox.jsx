import React from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { movieAction } from '../redux/actions/movieAction';

const SortBox = () => {
    const dispatch = useDispatch();

    const handleClick = (sortBy) => {
        dispatch(movieAction.getFilteredMovies(null, sortBy));
    };

    return ( 
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <h3>Sort Results By</h3>
            <Dropdown.Item onClick={() => handleClick("popularity.desc")}>Popularity Descending</Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick("popularity.asc")}>Popularity Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick("vote_average.desc")}>Rating Descending</Dropdown.Item>
            <Dropdown.Item onClick={() => handleClick("vote_average.asc")}>Rating Ascending</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortBox;