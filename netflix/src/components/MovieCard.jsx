
const MovieCard = ({item}) => {
    
    return ( 
        <div className="card"
        style={{backgroundImage:'url('+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}`+')'}}>
            Moviecard
        </div>
    );
}

export default MovieCard;