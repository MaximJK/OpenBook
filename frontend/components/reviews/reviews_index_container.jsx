import { connect } from 'react-redux';
import React from 'react';
import ReviewIndexForm from './reviews_index'
import { fetchReviews } from '../../actions/review_actions'

const msp = (state, ownProps) => {
    //  
    return {
    // reviews: Object.keys(state.entities.reviews).map(id => state.entities.reviews[id]),
    // book: ownProps.book
    }

}

const mdp = dispatch => {
    return {
        // action: book_id => dispatch(fetchReviews(book_id))

    }
}

export default connect(msp, mdp)(ReviewIndexForm)