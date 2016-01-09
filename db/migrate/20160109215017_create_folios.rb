class CreateFolios < ActiveRecord::Migration
  def change
    create_table :folios do |t|
      t.integer :user_id
      t.integer :primary_element_id
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
