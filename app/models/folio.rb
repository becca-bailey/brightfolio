class Folio < ActiveRecord::Base
  belongs_to :user
  has_many :elements
  # before_create :generate_token
  # before_save :check_user_existence

  validates :title, { presence: true }

  # def generate_token
  #   self.token = Digest::SHA1.hexdigest([self.grouping_id, Time.now, rand].join)
  # end

  # def check_user_existence
  #   recipient = User.find_by_email(self.email)
  #   if recipient
  #     self.recipient_id = recipient.id
  #   end
  # end

end
