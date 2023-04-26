import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import YouTube, { YouTubeProps } from 'react-youtube';

const Modals = ({setModal}) => {

    const {videoList, detailList} = useSelector(state=> state.movie)
    console.log(videoList)

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };

    return (  
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial',     
    }}
        >
        <Modal.Dialog style={{backgroundColor : 'black'}} >
            <Modal.Header closeButton  onClick={()=>{
        setModal(false)
    }}>
            <Modal.Title >{detailList.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <YouTube videoId={videoList.results[1].key} opts={opts} onReady={onPlayerReady} />;
            </Modal.Body>

            <Modal.Footer >

            
        </Modal.Footer>
        </Modal.Dialog>
    </div>
    );
}

export default Modals;