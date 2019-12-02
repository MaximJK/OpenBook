import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { fetchReviews } from '../../actions/review_actions';
import { addBook } from '../../actions/bookshelf_actions';

import { fetchBookshelves } from '../../actions/bookshelf_actions'
const mapStateToProps = (state, ownProps) => {
    return {
    userId: state.session.id,
    books: state.entities.books[ownProps.match.params.bookId],
    reviews: state.entities.reviews,
    bookshelves: state.entities.bookshelves,
}};

const mapDispatchToProps = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id)),
    fetchReviews: book_id => dispatch(fetchReviews(book_id)),
    addBook: (bookshelfBook) => dispatch(addBook(bookshelfBook)),
    fetchBookshelves: id => dispatch(fetchBookshelves(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShow);
