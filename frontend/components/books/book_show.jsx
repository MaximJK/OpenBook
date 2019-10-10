import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/create_review_form_container'
import ReviewsIndex from '../reviews/reviews_index'
class BookShow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
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
     debugger
        let { books } = this.props;
        if (!books) {
            return <div>Loading...</div>;
        }
        let { reviews } = this.props;
        if (!reviews) {
            reviews = ''
        }
        else {
            reviews = this.props.reviews.map(review => {
            return (
                <ReviewsIndex 
                key={reviews.id}
                review={reviews} />
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
                        want to read
                    </div>
                </div>
                <div className="column" id="book-info">
                <h1 id="book-title">{books.title}</h1>
                <h3>by {books.author}</h3>
                
                <p>{books.body}</p>
                <Link to="/home">Back to Index</Link>
                </div>
                </div>
                <div className='review-form-container'>
                    <CreateReviewFormContainer/>
                </div>
                <div>
                    <ul>
                        {reviews}
                    </ul>
                </div>
            </div>
            </>
        );
    }
}

export default BookShow;
