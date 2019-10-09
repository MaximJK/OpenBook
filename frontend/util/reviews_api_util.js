// INDEX SHOW DELETE UPDATEexport const fetchReviews = () => (
export const fetchReviews = book_id => (    
    $.ajax({
        method: 'GET',
        url: `/api/books/${book_id}/reviews`,
    })
);

export const fetchReview = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}`
    })
);

export const createReview = (review) => (
    $.ajax({
        url: `/api/reviews`,
        method: 'POST',
        data: { review }
    })
);

export const updateReview = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
);

export const deleteReview = id => (
    $.ajax({
        url: `/api/reviews/${id}`,
        method: 'DELETE'
    })
);
