class Book < ActiveRecord::Migration[5.2]
    def change
      create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :body
      t.string :cover_url, null: false
      t.timestamps
    end
end
end
