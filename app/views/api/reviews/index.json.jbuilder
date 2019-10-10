@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :book_id, :body, :rating, :created_at
        json.username review.user.username
    end
end