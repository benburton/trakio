class StoriesController < ApplicationController

  def create
    render json: Story.create(story_params.merge!(reporter_id: current_user.id))
  end

  private
  def story_params
    params.require(:story).permit(:title, :description, :project_id)
  end

end
