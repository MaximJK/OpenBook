import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/create_review_form_container'
import ReviewsIndex from '../reviews/reviews_index'
import AddBookForm from '../bookshelves/add_book_form';

class BookShow extends React.Component {
    constructor(props) {
        super(props);
        
        
    }
    roundHalf(num) {
        return Math.round(num * 2) / 2;
    }
    printStars(rating) {
        let x = []
        let subrate = this.roundHalf(rating)
        for (let i = subrate; i > 0; i--) {
            if (i === .5) {
                x.push( <i className="fas fa-star-half-alt"></i>)
            } else {
                x.push(<i className="fas fa-star"></i>)
            }
        }
        return x
    }   
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
        this.props.fetchReviews(Number(this.props.match.params.bookId));
        this.props.fetchBookshelves(this.props.userId);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId != this.props.match.params.bookId) {
            this.props.fetchBook(this.props.match.params.bookId);
        }
    }

    reviewCheck(isReviewed, books_id) {
         
        if (isReviewed === true) {
            return <div className="alreadyReviewed"> You've already reviewed this book</div>
        }
        else {
            return <CreateReviewFormContainer
                bookId={books_id} />
        }
    }
 
    render() {
        let isReviewed = false
        let averageReview = 0;
        let ratingDiv = ''
        let numReviews
        let { books } = this.props;
        let { bookshelves } = this.props;
        if (!books) {
            return <div>Loading...</div>;
        }
        //      
        //     let bookshelfStatus = []
        //     books.bookshelves.forEach(bookshelf => {
        //         if (bookshelf.user_id == this.props.userId) {
        //             bookshelfStatus.push(bookshelf)
        //         }
        //     })
        // }
        if (bookshelves.length === 0 || !bookshelves) {
            bookshelves = ''
        }
        else {
            // const currentBookshelf = 
            
            bookshelves = Object.values(bookshelves).map(bookshelf => {
                return (

                    <AddBookForm
                    key={bookshelf.name}
                    book_id={books.id}
                    bookshelf_id={bookshelf.id}
                    name={bookshelf.name}
                    addBook={this.props.addBook}
                    />

                )
            })
        }
        let { reviews } = this.props;
         
        if (Object.keys(reviews).length === 0 || !reviews) {
            reviews = ''

        }
        else {
            Object.values(reviews).forEach(review => {
                averageReview += review.rating
                if (review.user_id === this.props.userId){
                    isReviewed = true
                }
            })
            numReviews = Object.values(reviews).length
            averageReview /= numReviews
            averageReview = (averageReview).toFixed(2)
            ratingDiv = this.printStars(averageReview)
            reviews = Object.values(reviews).map(review => {

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
                    <div className="dropdown">
                        <button className="dropbtn">Add to Bookshelf  
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <ul className="dropdown-content">
                        {bookshelves}   
                        </ul>
                    </div>
                    
                </div>

                <div className="column" id="book-info">
                <h1 id="book-title">{books.title}</h1>
                <h3>by {books.author}</h3>
                            <div className="reviewAvg">
                                <span className="stars">{ratingDiv}</span> {averageReview} · {numReviews} reviews
                            </div>
                <p>{books.body}</p>
                <Link className="links" to="/home">Back to Index</Link>
                </div>
                </div>
                <div className='review-form-container'>
                    
                    {this.reviewCheck(isReviewed, books.id)}
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
