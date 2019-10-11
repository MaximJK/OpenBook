
@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id, :user_id, :name
    json.book_ids bookshelf.bookshelf_book_ids

  end
end