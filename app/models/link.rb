require 'uri'

class Link < ActiveRecord::Base
  validates :url, :title, presence: true
  validate :url_is_valid

  def url_is_valid
    if url
      uri = URI.parse(url)
      if !uri.kind_of?(URI::HTTP)
        errors.add(:url, "URL is invalid")
      end
    end
  end

end
