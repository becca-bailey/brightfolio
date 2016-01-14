class Folio < ActiveRecord::Base
  belongs_to :user
  has_many :elements
  # before_create :generate_token
  # before_save :check_user_existence

  validates :title, { presence: true }

  before_create :generate_token

  private

  def generate_token
    self.token = Digest::SHA1.hexdigest([Time.now, rand].join)
  end

end
