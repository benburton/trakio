class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  before_filter :authorize_token

  def current_user
    return nil if params[:auth].blank? && @user.blank?
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
