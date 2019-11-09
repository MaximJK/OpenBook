import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

const showBookshelf = props => {
    debugger
    let id = props.bookshelf
    return (
    
        <li>
            <Link to={`/books/${props.id}`}>
            <img src={props.cover} alt="" />
            {props.title}
            </Link>
            <button onClick={() => {
                props.removeBook(id)
            }}> remove </button>
        </li>
    )

}

export default showBookshelf;