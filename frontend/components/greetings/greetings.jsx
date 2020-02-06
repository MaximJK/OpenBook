import React from 'react';
import { Link } from 'react-router-dom';

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            initialBooks: [],
            books: []
        }

    }

    filteredBooks = (event) => {
        let books = this.state.initialBooks;
        debugger
        if (event.target.value === "") {
            books = []
        } else {
        books = Object.values(books).filter((book) => {
            debugger
            return book.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        })};
        this.setState({books: books});
    }
    componentDidMount = () => {
        this.props.fetchBooks();
        debugger
        this.setState({
            initialBooks: this.props.books,
            books: this.props.books
        });
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.books != this.props.books) {
            this.setState({
                initialBooks: this.props.books
            });
        }

    }
   

    render(){
        debugger
        let books2 
        if (this.state.books === [] || this.state.books === {} || !this.state.books || this.state.books === undefined){
            books2 = <li></li>
        } else {
            debugger
        books2 = Object.values(this.state.books).map(book => {
            return (
                <Link to={`/books/${book.id}`}>
                <li className="search-li" key={book.title}>
                    <div id='search-title'>{book.title}</div>
                    <div>by {book.author}</div>
                </li>
                </Link>
            )
        })
        }
        return (
            <>
            <nav className="nav-bar">
                    <div className="header-parent" id="header">
                        <Link to={'/home'}>
                <div id="small-title" >open<span className="book">book</span> </div>
                </Link>
                <div className="search">
                <form id="searchbar-box">
                    <input className="searchBox" type="text" placeholder="Search books" onChange={this.filteredBooks}  />
                </form>
                <ul className="search-dropdown">
                    {books2}
                </ul>
                </div>
                <div id='user-nav'>
                <h1 className='block' id='username'>{this.props.currentUser.username}</h1>
                
                <Link id='bookshelf' to={`/bookshelves/${this.props.currentUser.id}`}>My Books</Link>
                
                <button className="block" id='logout' onClick={this.props.logout}>Log Out</button>
                </div>
                </div>
            </nav>
            </>

        );

   

    }
};

export default Greetings;