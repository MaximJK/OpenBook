json.book do
  json.extract! book, :id, :title, :author, :body
  json.cover_url asset_path(book.cover_url)
end