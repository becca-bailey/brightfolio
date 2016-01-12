class Element < ActiveRecord::Base
  belongs_to :folio
  validate :any_present?
  has_attached_file :image,
   styles: {
     thumb: '100x100>',
     square: '200x200#',
     medium: '300x300>'
    }

   has_attached_file :document
   has_attached_file :audio
   has_attached_file :link

   validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
   validates_attachment :document, content_type: { :content_type => %w(application/pdf application/msword application/vnd.openxmlformats-officedocument.wordprocessingml.document) }

   validates_attachment_content_type :audio, :content_type => [ 'audio/mp3','audio/mpeg']

   validates_attachment_content_type :link.format_link


  def any_present?
    if %w(title image document audio element_link description).all?{|attr| self[attr].blank?}
    errors.add :base, "Error message"
    end
  end

  def format_link
    if /\Ahttp:\/\//
    elsif /\Ahttps:\/\//
    else
      element_link = "http://" + element.element_link
  end


end
