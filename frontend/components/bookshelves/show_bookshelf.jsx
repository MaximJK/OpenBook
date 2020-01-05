import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

const showBookshelf = props => {
    let id = props.bookshelf
    if (props.myShelf === true) {
    return (
    
        <li className='bookshelf-li'>
            <Link to={`/books/${props.id}`}>
            <img src={props.cover} alt="" />
            </Link>
            <Link to={`/books/${props.id}`} className='bookshelfTitle'>
            {props.title}
            </Link>
            <Link to={`/books/${props.id}`} className='bookshelfAuthor'>
            {props.author}
            </Link>
            
            <i className="fas fa-times" onClick={() => {
                props.removeBook(id)
            }} ></i> 
        </li>
    )
    } else {
        return (
            <li className='bookshelf-li'>
                <Link to={`/books/${props.id}`}>
                    <img src={props.cover} alt="" />
                </Link>
                <Link to={`/books/${props.id}`} className='bookshelfTitle'>
                    {props.title}
                </Link>
                <Link to={`/books/${props.id}`} className='bookshelfAuthor'>
                    {props.author}
                </Link>
            </li>
        )
    }


}

export default showBookshelf;