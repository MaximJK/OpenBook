import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../reviews/create_review_form_container'

class BookShow extends React.Component {
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId != this.props.match.params.bookId) {
            this.props.fetchBook(this.props.match.params.bookId);
        }
    }
 
    render() {
     
        const { books } = this.props;
        if (!books) {
            return <div>Loading...</div>;
        }

        return (
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
                    
                </div>
            </div>
        );
    }
}

export default BookShow;
