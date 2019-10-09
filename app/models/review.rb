# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  body       :string           not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :book_id :user_id :body :rating, presence: true

    belongs_to :book,
    class_name: :book,
    foreign_key: :book_id,


    belongs_to :user,
    class_name: :user,
    foreign_key: :user_id,
end
