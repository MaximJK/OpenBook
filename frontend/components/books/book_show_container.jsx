import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
    books: state.books[ownProps.match.params.bookId]
});
ok
const mapDispatchToProps = dispatch => ({
    fetchBook: id => dispatch(fetchBook(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShow);
