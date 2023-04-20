import { useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useEffect } from "react";

const DetailCard = ({detailList}) => {

    console.log(detailList.genres)

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
                <p>영화 인기도</p>
                <div>
                    <span>평점</span>
                    <span>연령제한</span>
                </div>
                <p>줄거리</p>
                <div>
                    <p>예산</p>
                    <p>개봉일</p>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;