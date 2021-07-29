class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :price, :period
  has_one :users
  has_one :services
end
