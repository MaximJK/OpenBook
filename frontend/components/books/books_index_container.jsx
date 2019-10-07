import BooksIndex from './books_index';
import { connect } from 'react-redux';
const msp = (state) => {
    return {posts: Object.keys(state.posts).map(id => state.books[id])
    }
}

const mdp = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks())
});


export default connect(msp, mdp)(BooksIndex)