class CommentsController < ApplicationController

  def create
    story = Story.find(comment_params[:story_id])
    unless current_user.projects.include?(story.project)
      render json: {message: 'You may not add comments to this story'}, status: 403
    else
      comment = Comment.create(comment_params.merge(user_id: current_user.id))
      render json: comment
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :story_id)
  end

end