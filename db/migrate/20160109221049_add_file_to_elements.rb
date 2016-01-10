class AddFileToElements < ActiveRecord::Migration
  def change
    add_attachment :elements, :file
  end
end
