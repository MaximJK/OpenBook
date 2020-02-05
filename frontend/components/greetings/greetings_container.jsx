import { connect } from 'react-redux';
import Greetings from './greetings'
import { logout } from '../../actions/session_actions';
import { fetchBooks } from '../../actions/book_actions'

const mapStateToProps = (state) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        books: state.entities.books
    };
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBooks: () => dispatch(fetchBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greetings)