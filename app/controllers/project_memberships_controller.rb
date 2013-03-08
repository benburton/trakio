class ProjectMembershipsController < ApplicationController

  def create
    project = Project.find(project_membership_params[:project_id])
    unless project.users.include?(current_user)
      render json: {message: 'You may not add users to this team'}, status: 403
    else
      if user = User.find_by_email(project_membership_params[:email])
        project_membership = ProjectMembership.create(user: user, project_id: project_membership_params[:project_id])
      else
        project_membership = ProjectMembership.create(project_membership_params)
      end
      render json: project_membership
    end
  end

  private
  def project_membership_params
    params.require(:project_membership).permit(:project_id, :email)
  end

end