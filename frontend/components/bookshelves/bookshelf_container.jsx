import BookshelfIndex from './bookshelf_index';
import { connect } from 'react-redux';
import { fetchBook } from '../../actions/book_actions'
import { fetchBookshelves } from '../../actions/bookshelf_actions'

const msp = (state, ownProps) => {
    debugger
    return {
        userId: state.session.id,
        bookshelves: state.entities.bookshelves,
        books: state.entities.books
    }
}

const mdp = (dispatch) => ({
    fetchBookshelves: id => dispatch(fetchBookshelves(id)),
    fetchBook: id => dispatch(fetchBook(id)),

});


export default connect(msp, mdp)(BookshelfIndex);