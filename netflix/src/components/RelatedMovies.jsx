import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const RelatedMovies = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return ( 

        
        <div style={{backgroundImage:
            'url('+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/${item.poster_path}`+')', 
            width:300, height:200,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            }}
            onClick={()=>{
                navigate(`/movies/${item.id}`)
            }}
            >

        </div>
    );
}

export default RelatedMovies;