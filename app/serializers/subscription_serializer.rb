class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :period, :service
  has_one :user
  has_one :service
end
