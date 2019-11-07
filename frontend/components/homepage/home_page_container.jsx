import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';
import { fetchBook } from '../../actions/book_actions';
import { fetchBookshelves } from '../../actions/bookshelf_actions';

const mapStateToProps = (state) => {
    return {
        userId: state.session.id,
        bookshelves: state.entities.bookshelves,
        
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBookshelves: id => dispatch(fetchBookshelves(id)),
    fetchBook: id => dispatch(fetchBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)