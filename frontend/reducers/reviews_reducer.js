import {
    RECEIVE_REVIEWS ,
    RECEIVE_REVIEW,
    CREATE_REVIEW,
    UPDATE_REVIEW,
    DELETE_REVIEW
} from "../actions/review_actions";
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return merge({}, action.reviews)
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review})
        case DELETE_REVIEW:
            let newState = merge({}, oldState);
            delete newState[action.reviewId];
            return newState;
        default:
            return oldstate;
   }
} 