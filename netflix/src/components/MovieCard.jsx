import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const MovieCard = ({item}) => {
    const {genreList} = useSelector(state=>state.movie)

    return ( 
        <div className="card"
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
                <span>{item.vote_average}</span>
                <span>{item.adult ? "청불" : "Under 18"}</span>
            </div>
        </div>
            
        </div>
    );
}

export default MovieCard;