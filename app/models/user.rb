class User < ActiveRecord::Base
  has_many :links
  validates :name, presence: true, uniqueness: true

  has_secure_password
end
