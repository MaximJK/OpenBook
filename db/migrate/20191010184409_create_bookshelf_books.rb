class CreateBookshelfBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelf_books do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false
      t.timestamps
    end
  end
end
