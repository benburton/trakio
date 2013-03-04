class UserSerializer < ActiveModel::Serializer
  attributes :authentication_token, :email
end