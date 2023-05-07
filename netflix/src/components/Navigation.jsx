import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';

const Navigation = () => {
    let navigate = useNavigate();
    const {loading,filterData ,withGenres,keyWord}= 
    useSelector(state=>state.filter);
    const dispatch = useDispatch();

    

    const search = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            navigate(`movies`);
            dispatch({type : "GET_KEYWORD", payload : {keyWord}})
            console.log(keyWord)
            // url을 바꿔준다
            
        }
    }


    return (  
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                    width={100}
                    alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/' className="nav-item">Home</Link>
                    <Link to='movies' className="nav-item">Movies</Link>

                </Nav>
                <Form onSubmit={(e)=>search(e)} className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => dispatch({type: "GET_KEYWORD", payload: {keyWord: e.target.value}})}
                    />
                    <Button type='submit' variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );
}

export default Navigation;