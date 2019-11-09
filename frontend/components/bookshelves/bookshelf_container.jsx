import BookshelfIndex from './bookshelf_index';
import { connect } from 'react-redux';
import { fetchBookshelves,
    removeBook } from '../../actions/bookshelf_actions'


const msp = (state, ownProps) => {
    return {
        userId: state.session.id,
        bookshelves: state.entities.bookshelves,
    }
}

const mdp = (dispatch) => ({
    fetchBookshelves: id => dispatch(fetchBookshelves(id)),
    removeBook: id => dispatch(removeBook(id))
});


export default connect(msp, mdp)(BookshelfIndex);