class Element < ActiveRecord::Base
  belongs_to :folio
  validate :any_present?
  has_attached_file :image,
   styles: {
     thumb: '100x100>',
     square: '200x200#',
     medium: '300x300>'
    }

   has_attached_file :document, styles: {thumbnail: ["200x200#", :png]}

   validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
   validates_attachment :document, content_type: { content_type: "application/pdf" }

  def any_present?
    if %w(title image element_link description).all?{|attr| self[attr].blank?}
    errors.add :base, "Error message"
    end
  end

end
