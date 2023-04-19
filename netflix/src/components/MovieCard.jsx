import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({item}) => {
    const {genreList} = useSelector(state=>state.movie);
    const navigate = useNavigate();
    return ( 
        <div onClick={()=>{
            navigate(`movies/${item.id}`);
        }} 
        className="card"
        style={{backgroundImage:
        'url('+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}`+')', 
        width:300, height:200,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        }}>

        <div className='overlay'>
            <h1 className="card_title">{item.title}</h1>
            <div>{item.genre_ids.map(id=><Badge bg="danger">
                {// 장르별 id와 item의 장르 id와 같은 값을 찾음
                genreList.find((item) =>item.id == id).name}
            </Badge>)}
            
            </div>
            <div>
                <span>평점 : {item.vote_average}</span> <br/>
                <span>연령제한 : {item.adult ? "청불" : "Under 18"}</span>
            </div>
        </div>
            
        </div>
    );
}

export default MovieCard;