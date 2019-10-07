# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Table name: books
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author     :string           not null
#  body       :string
#  cover_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

Book.create!(:title => "",:author => "",:body => "",:cover_url => "")