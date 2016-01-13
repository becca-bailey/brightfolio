class AddDocumentToElements < ActiveRecord::Migration

  def self.up
    add_attachment :elements, :document
  end

  def self.down
    remove_attachment :elements, :document
  end

end
