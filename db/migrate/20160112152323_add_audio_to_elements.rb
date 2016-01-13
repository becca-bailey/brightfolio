class AddAudioToElements < ActiveRecord::Migration
  def self.up
    add_attachment :elements, :audio
  end

  def self.down
    remove_attachment :elements, :audio
  end
end
