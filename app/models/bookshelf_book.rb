# == Schema Information
#
# Table name: bookshelf_books
#
#  id           :bigint           not null, primary key
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class BookshelfBook < ApplicationRecord
    validates :book_id, :bookshelf_id, presence: true
    belongs_to :books
    belongs_to :bookshelves
end
