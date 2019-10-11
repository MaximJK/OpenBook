@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id, :user_id, :name
    json.book_ids bookshelf.book_ids

  end
end