import BooksIndex from './books_index';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/book_actions'
debugger
const msp = ({}) => {
    return {books: Object.keys(state.books).map(id => state.books[id])
    }
}

const mdp = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks())
});


export default connect(msp, mdp)(BooksIndex);