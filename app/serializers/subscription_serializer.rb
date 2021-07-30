class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :period
  has_one :user
  has_one :service
end
