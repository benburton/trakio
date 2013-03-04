class RegistrationController < ApplicationController

  skip_before_filter :authorize_token

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end