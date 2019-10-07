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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
