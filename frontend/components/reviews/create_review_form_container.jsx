
import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form'
import { createReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {
    debugger
    const review =  {
        book_id: ownProps.bookId,
        user_id: state.session.id,
        body: '',
        rating: 0

    }
    return {
        review 
}
}

const mdp = dispatch => {
    return {
        action: review => dispatch(createReview(review))

    }
}

export default connect(msp,mdp)(ReviewForm)