class AddImageToElements < ActiveRecord::Migration
  def self.up
    add_attachment :elements, :image
  end

  def self.down
    remove_attachment :elements, :image
  end
end
