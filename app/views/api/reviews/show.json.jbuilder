
json.extract! @review, :id, :user_id, :book_id, :body, :rating, :created_at
json.username @review.user.username