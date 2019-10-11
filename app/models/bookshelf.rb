#     t.integer "user_id", null: false
#     t.string "name", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false

class Bookshelf < ApplicationRecord
    has_one :user

    has_many :bookshelf_books

    has_many :books,
    through: :bookshelf_books
end
