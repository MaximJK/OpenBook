import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

class BooksIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render()
}