import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const Modals = ({setModal}) => {

    const {videoList} = useSelector(state=> state.movie)
    console.log(videoList)

    return (  
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial',      
    }} onClick={()=>{
        setModal(false)
    }}
        >
        <Modal.Dialog >
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>

            
        </Modal.Footer>
        </Modal.Dialog>
    </div>
    );
}

export default Modals;