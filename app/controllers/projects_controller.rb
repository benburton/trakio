class ProjectsController < ApplicationController

  def index
    render json: current_user.projects
  end

  def show
    render json: Project.find(params[:id])
  end

  def create
    project = Project.create(project_params.merge(owner: current_user))
    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name)
  end

end