class AddFileToElements < ActiveRecord::Migration
  def self.up
    add_attachment :elements, :file
  end

  def self.down
    remove_attachment :elements, :file
  end
end
