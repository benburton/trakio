class AuthTokenController < ApplicationController

  skip_before_filter :authorize_token, only: [:login]

  def login
    user = User.where(email: user_params[:email]).first
    if user && user.valid_password?(user_params[:password])
      render json: user, status: 200
    else
      render json: {message: 'Error with your login or password'}, status: 401
    end
  end


  private
  def user_params
    params.require(:login).permit(:email, :password)
  end

end