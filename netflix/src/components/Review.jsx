import { useParams } from "react-router-dom";

const Review = ({reviewList}) => {
    const {id} = useParams();
    console.log(reviewList)
    
    
    return ( 
        <div>
            <div className="review_Box">
                <h3>
                    {reviewList?.author}
                </h3>
                <p>
                    {reviewList?.content}
                </p>
                
            </div>
        </div>
    );
}

export default Review;