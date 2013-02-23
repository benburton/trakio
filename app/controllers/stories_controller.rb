class StoriesController < ApplicationController

  def index
    render json: Story.all
  end

end
