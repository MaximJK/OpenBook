@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :author, :body, :cover_url
  end
end