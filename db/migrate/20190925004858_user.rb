class User < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :username null: false
      t.string 
      t.string :email 
  end
end
