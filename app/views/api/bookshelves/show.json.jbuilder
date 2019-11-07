
@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id, :user_id, :name
  

  end
end