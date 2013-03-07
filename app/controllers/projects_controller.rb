class ProjectsController < ApplicationController

  def index
    render json: Project.where(user_id: current_user.id)
  end

  def show
    render json: Project.find(params[:id])
  end

  def create
    project = Project.create(project_params.merge(user_id: current_user.id))
    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end