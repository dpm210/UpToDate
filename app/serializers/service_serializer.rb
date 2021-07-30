class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :logo, :price
end
