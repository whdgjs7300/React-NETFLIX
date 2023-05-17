import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import YouTube, { YouTubeProps } from 'react-youtube';

const Modals = ({modal,setModal}) => {

    const {videoList, detailList} = useSelector(state=> state.movie)


    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        disablekb: 1,
        iv_load_policy: 3,
        controls: 0,
        fs: 0,
        rel: 0,
        
        },
    };

    return (  
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial',
        margin:'auto'
    }}
        >
        
        <Modal.Dialog style={{width:'100%', height:'100%'}} fullscreen={true}>
            <Modal.Header closeButton  onClick={()=>{
        setModal(false)
    }}>
            <Modal.Title style={{color :'black'}} >{detailList.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body >
                
                    <YouTube videoId={videoList && videoList.results[0].key} opts={opts} onReady={onPlayerReady} />;
                
            
            </Modal.Body>


        </Modal.Dialog>
    </div>
    );
}

export default Modals;