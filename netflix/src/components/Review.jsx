import { useParams } from "react-router-dom";

const Review = ({reviewList}) => {
    const {id} = useParams();
    console.log(reviewList)
    
    
    return ( 
        <div >
            <div >
                <h3>
                    {reviewList?.author}
                </h3>
                <p>
                    {reviewList?.content}
                </p>
                <hr />
            </div>
        </div>
    );
}

export default Review;