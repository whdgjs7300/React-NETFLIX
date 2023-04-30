import Dropdown from 'react-bootstrap/Dropdown';



const SortBox = () => {

    return ( 
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <h3>Sort Results By</h3>
            
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default SortBox;