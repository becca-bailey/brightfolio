class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.integer :folio_id
      t.string :title
      t.string :description
      t.string :citation
      t.string :element_link
      t.string :font
      t.string :width

      t.timestamps null: false
    end
  end
end
