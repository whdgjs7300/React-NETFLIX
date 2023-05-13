import { useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useEffect } from "react";
import Modals from "./Modals";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const DetailCard = ({detailList}) => {
    const [modal,setModal] = useState(false);

    

    return ( 
        <div>
            {
                modal ? <Modals setModal={setModal}/> : null
            }
            

            <div>
                {
                    detailList.genres && detailList.genres.map((item)=>
                    <div className="badge">
                    <Badge bg="danger" >
                        <p>{item.name}</p>
                    </Badge>
                    </div>
                    
                    )
                }
                <hr />
                <h1 className="title">{detailList.title}</h1>
                <hr />
                
                <div className="card_Info">
                    <span>{detailList.popularity}</span>
                    <span>{detailList.vote_average}</span>
                    <span>{
                        detailList.adult == false ? "under 18" : "청불"
                        }</span>
                </div>
                <hr />
                <p className="P_tag">{detailList.overview}</p>
                <hr />
                <div>
                    <p>예산</p>
                    <p>{detailList.release_date}</p>
                    <hr />
                    <button onClick={()=>{
                        setModal(true);
                    }} >예고편 보기</button>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;