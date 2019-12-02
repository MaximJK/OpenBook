import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

const ReviewsIndex = ({review}) => {
     
    return (

    <li className="reviews-li">
        <div>
            {review.username} rated it {review.rating} {review.created_at}
            
        </div>
        <div>
            {review.body}
        </div>
    </li>

    )

}

export default ReviewsIndex;