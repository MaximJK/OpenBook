import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { fetchReviews } from '../../actions/review_actions'
// debugger
const mapStateToProps = (state, ownProps) => {

    return {
    books: state.entities.books[ownProps.match.params.bookId],
    reviews: state.entities.reviews
}};

const mapDispatchToProps = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id)),
    fetchReviews: book_id => dispatch(fetchReviews(book_id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShow);
