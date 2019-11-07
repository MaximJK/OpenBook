@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id, :user_id, :name
    json.book  bookshelf.books.each do |book|
      json.extract! book, :id, :title, :author, :body, :cover_url
    end
  end
end

