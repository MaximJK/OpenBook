import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import ReviewForm from './review_form'
import { createReview } from '../../actions/review_actions'
import entitiesReducer from '../../reducers/entities_reducer';

const msp = (state, ownProps) => {
        const review =  {
            user_id: state.session.id,
            book_id: state.entities.books.id,
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