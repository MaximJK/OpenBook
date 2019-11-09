import React from 'react';
import { Link } from 'react-router-dom';

class Greetings extends React.Component {
    componentDidMount() {
        
    }

    render(){
        return (
            <>
            <nav>
                    <div className="nav-bar" id="header">
                        <Link to={'/home'}>
                <div id="small-title" >open<span className="book">book</span> </div>
                </Link>
                <div id="searchbar-box">
                    <input className="searchBox__input" type="text" placeholder="Search books" />
                </div>
                <div id='user-nav'>
                <h1 className='block' id='username'>{this.props.currentUser.username}</h1>
                            <Link className='bookshelf' to={`/bookshelves/${this.props.currentUser.id}`}>Bookshelves</Link>
                            <button className="block" id='logout' onClick={this.props.logout}>Log Out</button>
                </div>
                </div>
            </nav>
            </>

        );

   

    }
};

export default Greetings;