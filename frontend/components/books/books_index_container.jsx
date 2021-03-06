import BooksIndex from './books_index';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/book_actions'

const msp = (state) => {
    return { books: Object.keys(state.entities.books).map(id => state.entities.books[id])
    }
}

const mdp = (dispatch) => ({
    fetchBooks: book_id => dispatch(fetchBooks(book_id)),

});


export default connect(msp, mdp)(BooksIndex);