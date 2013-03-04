class AuthTokenController < ApplicationController

  skip_before_filter :authorize_token, only: [:create]

  def login
    params
    if user = User.find_for_database_authentication(email: user_params[:email])
      render json: user
    else
      render json: {message: 'Error with your login or password'}, status: 401
    end
  end


  private
  def user_params
    params.require(:login).permit(:email, :password)
  end

end