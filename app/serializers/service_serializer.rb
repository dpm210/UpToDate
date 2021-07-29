class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :logo
end
