class ApplicationController < ActionController::API

  before_filter :authorize_token

  def current_user
    @user ||= User.find_by_authentication_token(params[:auth])
    @user
  end


  private

  def authorize_token
    unless current_user
      render json: {message: "Invalid authentication token"}, status: 401
    end
  end

end
