
import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form'
import { createReview } from '../../actions/review_actions'


const msp = (state, ownProps) => {
    let key = Object.keys(state.entities.books)[0]
    const bkid = Number(key)
        const review =  {
            book_id: bkid,
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