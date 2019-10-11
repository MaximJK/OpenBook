import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/create_review_form_container'
import ReviewsIndex from '../reviews/reviews_index'
class BookShow extends React.Component {
    printStars(rating) {
        let x = ''
        for (let i = 0; i < rating; i++) {
            x += "⭑"
        }
        return x
    }   
    componentDidMount() {
        debugger
        this.props.fetchBook(this.props.match.params.bookId);
        this.props.fetchReviews(Number(this.props.match.params.bookId));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId != this.props.match.params.bookId) {
            this.props.fetchBook(this.props.match.params.bookId);
        }
    }
 
    render() {
     
        let { books } = this.props;
        if (!books) {
            return <div>Loading...</div>;
        }
        let { reviews } = this.props;
        if (Object.keys(reviews).length === 0 || !reviews) {
            reviews = ''
        }
        else {
            
            reviews = Object.values(this.props.reviews).map(review => {
            return (
            
                // <ReviewsIndex 
                // key={review.id}
                // review={review} />
                <li className="reviews-li">
                    <div className="review-div">
                    <div className="review-header">
                            {review.username} rated it <span className="stars">{this.printStars(review.rating)}</span> <a className='created'>{review.created_at.slice(0, 10)}</a>
                    </div>
                    <div className='review-body'>
                        <p>{review.body}</p>
                    </div>
                    </div>
                </li>
            )
        })}

        return (
            <>
            <div>
            <div className="book-show-row">
                <div className="column" id="book-img">
                    <img src={books.cover_url} alt=""/>
                    {/* bookshelf bar */}
                    <div>
                        <button id='bookshelf-button' className="submit" >want to read</button>
                     
                    </div>
                </div>
                <div className="column" id="book-info">
                <h1 id="book-title">{books.title}</h1>
                <h3>by {books.author}</h3>
                
                <p>{books.body}</p>
                <Link className="links" to="/home">Back to Index</Link>
                </div>
                </div>
                <div className='review-form-container'>
                    <CreateReviewFormContainer/>
                </div>
                <div>
                    <ul className='review-list'>
                        {reviews}
                    </ul>
                </div>
            </div>
            </>
        );
    }
}

export default BookShow;
