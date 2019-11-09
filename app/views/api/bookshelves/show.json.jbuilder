@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.extract! bookshelf, :id, :user_id, :name
    json.book bookshelf.bookshelf_books.each do |bookshelfBook|
      json.bookshelfBook bookshelfBook.id
      json.data bookshelfBook.book
    # json.book  bookshelf.books.each do |book|
    #   json.extract! book, :id, :title, :author, :body, :cover_url
    #   json.bookshelfBook book.bookshelf_books
    end
  end
end
