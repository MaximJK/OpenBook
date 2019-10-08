import React from 'react';
import { Link } from 'react-router-dom';

class BookShow extends React.Component {
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId != this.props.match.params.bookId) {
            this.props.fetchBook(this.props.match.params.bookId);
        }
    }
    debugger
    render() {
        debugger
        const { books } = this.props;
        if (!books) {
            return <div>Loading...</div>;
        }

        return (
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
        );
    }
}

export default BookShow;
