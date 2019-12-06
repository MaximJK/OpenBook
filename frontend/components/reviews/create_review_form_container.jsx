
import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form'
import { createReview, updateReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {
     
    const review =  {
        id:ownProps.id,
        book_id: ownProps.bookId,
        user_id: state.session.id,
        body: ownProps.body,
        rating: ownProps.rating

    }
    const type = {
        type: ownProps.type
}

    return {
        review,
        type
}
}

const mdp = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),
        updateReview: review => dispatch(updateReview(review))

    }
}

export default connect(msp,mdp)(ReviewForm)