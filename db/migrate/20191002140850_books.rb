class Books < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.integer :review_ids, null: false
      t.string :cover_url, null:false
      t.timestamps
    end
  end
end
