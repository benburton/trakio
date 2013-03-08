class UserSerializer < ActiveModel::Serializer
  attributes :id, :authentication_token, :email

  def include_authentication_token?
    # only serialize authentication tokens for current_user
    object == scope
  end

end