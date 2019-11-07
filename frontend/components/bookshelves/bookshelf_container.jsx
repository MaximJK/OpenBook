import BookshelfIndex from './bookshelf_index';
import { connect } from 'react-redux';
import { fetchBookshelves,
    removeBook } from '../../actions/bookshelf_actions'


const msp = (state, ownProps) => {
    debugger
    return {
        userId: state.session.id,
        bookshelves: state.entities.bookshelves,
        // books: state.entities.books
    }
}

const mdp = (dispatch) => ({
    fetchBookshelves: id => dispatch(fetchBookshelves(id)),
    removeBook: id
});


export default connect(msp, mdp)(BookshelfIndex);