class UsersController < ApplicationController

  def show
    render json: params[:id] == 'me' ? current_user : User.find(params[:id])
  end

  def update
    if params[:id] != 'me' && params[:id].to_i != current_user.id
      render json: { message: "You many not modify other users' data" }, status: 403
    else
      user = params[:id] == 'me' ? current_user : User.find(params[:id].to_i)
      user.update_attributes(user_attributes)
      render json: user
    end
  end

  private
  def user_attributes
    params.require(:user).permit(:email, :name)
  end

end