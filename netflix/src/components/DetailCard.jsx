import { useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useEffect } from "react";

const DetailCard = ({detailList}) => {

    console.log(detailList)

    return ( 
        <div>
            <div>

            </div>

            <div>
                {
                    detailList.genres && detailList.genres.map((item)=>
                    <Badge bg="danger" >
                        {item.name}
                    </Badge>
                    )
                }
                
                <h1>{detailList.title}</h1>
                <p>{detailList.popularity}</p>
                <div>
                    <span>{detailList.vote_average}</span>
                    <span>{
                        detailList.adult == false ? "under 18" : "청불"
                        }</span>
                </div>
                <p>{detailList.overview}</p>
                <div>
                    <p>예산</p>
                    <p>{detailList.release_date}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;