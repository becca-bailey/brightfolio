class Element < ActiveRecord::Base
  belongs_to :folio
  validate :any_present?
  has_attached_file :image,
   styles: {
     thumb: '100x100>',
     square: '200x200#'
    }

  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def any_present?
    if %w(title image element_link description).all?{|attr| self[attr].blank?}
    errors.add :base, "You must include at least one field for this element."
    end
  end

end
