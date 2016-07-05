class Api::CommentsController < ApplicationController

  def create
    comment = Comment.create!(comment_params)
    @project = Project.find(comment.project_id)
    render 'api/projects/show'
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :project_id)
  end

end
