class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.integer :folio_id
      t.string :title
      t.string :description
      t.string :citation
      t.string :element_link

      t.timestamps null: false
    end
  end
end
