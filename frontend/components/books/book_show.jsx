import React from 'react';
import { Link } from 'react-router-dom';

class BookShow extends React.Component {
    componentDidMount() {
        this.props.fetchBook(this.props.match.params.bookId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.book.id != this.props.match.params.bookId) {
            this.props.fetchBook(this.props.match.params.bookId);
        }
    }

    render() {
        const { post } = this.props;

        return (
            <div>
                <h3>{books.title}</h3>
                
                <p>{book.body}</p>
                <Link to="/home">Back to Index</Link>
            </div>
        );
    }
}

export default BookShow;
