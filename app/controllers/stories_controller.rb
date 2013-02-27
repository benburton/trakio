class StoriesController < ApplicationController

  def index
    render json: Story.all
  end

  def create
    render json: Story.create(story_params)
  end


  private

  def story_params
    params.require(:story).permit(:title, :description)
  end

end
