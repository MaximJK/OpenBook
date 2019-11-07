
json.extract! @book, :id, :title, :author, :body, :cover_url
json.bookshelves @book.bookshelves.each do |bookshelf|
    json.extract! bookshelf, :name, :user_id 
end
