class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  # has_many :services
  has_many :subscriptions
end
