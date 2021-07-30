class User < ApplicationRecord
    has_many :subscriptions
    has_many :services, through: :subscriptions

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password_digest, length: { minimum: 1}
    # validates :password_digest, presence: true, uniqueness: true
end
