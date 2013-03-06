class ProjectsController < ApplicationController

  def index
    render json: Project.where(user_id: current_user.id)
  end

  def show
    render json: Project.find(params[:id])
  end

end