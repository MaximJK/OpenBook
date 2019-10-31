import { connect } from 'react-redux';
import AddBookForm from './add_book_form';
import { addBook } from '../../actions/bookshelf_actions';
const mapStateToProps = (state, ownProps) => {
    debugger
    const bookshelfBook = {book_id: this.state.book_id, bookshelf_id: this.state.bookshelf_id}
    const name = {name: this.state.name}
    return { 
        bookshelfBook: bookshelfBook,
        name: name
         }
};
const mapDispatchToProps = dispatch => ({
    addBook: bookshelfBook => dispatch(addBook(bookshelfBook))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBookForm);
