export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
import * as ReviewUtil from "../util/reviews_api_util";


export const fetchReviews = book_id => dispatch => (
    ReviewUtil.fetchReviews(book_id).then(reviews => (
        dispatch(receiveReviews(reviews))
    ))
);

export const fetchReview = (id) => dispatch => (
    ReviewUtil.fetchReview(id).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const createReview = (review) => dispatch => (
    ReviewUtil.createReview(review).then(review => (
        dispatch(reviewReview(review))
    ))
);

export const updateReview = (review) => dispatch => (
    ReviewUtil.updateReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const deleteReview = (id) => dispatch => (
    ReviewUtil.deleteReview(id).then(reviewId => (
        dispatch(createReview(reviewId))
    ))
);
const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWs,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});



const deleteReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
});