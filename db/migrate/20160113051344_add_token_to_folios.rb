class AddTokenToFolios < ActiveRecord::Migration
  def self.up
    add_attachment :folios, :token
  end

  def self.down
    remove_attachment :folios, :token
  end
end
