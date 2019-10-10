import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

const ReviewsIndex = ({reviews}) => {
    debugger
    return (

    <li className="reviews-li">
        <div>
            {reviews.username} rated it {reviews.rating} {reviews.created_at}
            
        </div>
        <div>
            {reviewsbody}
        </div>
    </li>

    )

}

export default ReviewsIndex;