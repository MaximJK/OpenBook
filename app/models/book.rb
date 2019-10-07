# == Schema Information
#
# Table name: books
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author     :string           not null
#  body       :string
#  cover_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :author, :cover_url, presence: true

     has_many :bookshelves
end
