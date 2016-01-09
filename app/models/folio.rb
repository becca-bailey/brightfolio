class Folio < ActiveRecord::Base
  belongs_to :user
  has_many :elements

  validates :title, { presence: true }
end
