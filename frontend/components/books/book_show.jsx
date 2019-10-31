import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/create_review_form_container'
import ReviewsIndex from '../reviews/reviews_index'
import AddBookForm from '../bookshelves/add_book_form';
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
        this.props.fetchBookshelves(this.props.userId);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId != this.props.match.params.bookId) {
            this.props.fetchBook(this.props.match.params.bookId);
        }
    }
 
    render() {
        let { bookshelves } = this.props
        let { books } = this.props;
        debugger
        if (Object.keys(bookshelves).length === 0 || !bookshelves) {
            bookshelves = ''
        }
        else {
            debugger
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
                    <ul>
                        {bookshelves}
                     
                    </ul>
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
