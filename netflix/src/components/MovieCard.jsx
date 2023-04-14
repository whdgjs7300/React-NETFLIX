import Badge from 'react-bootstrap/Badge';

const MovieCard = ({item}) => {
    
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
            <div>{item.genre_ids.map(id=><Badge bg="danger">id</Badge>)}</div>
            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult ? "청불" : "Under 18"}</span>
            </div>
        </div>
            
        </div>
    );
}

export default MovieCard;