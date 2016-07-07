class Api::CommentsController < ApplicationController

  def create
    comment = Comment.create!(comment_params)
    @project = Project.find(comment.project_id)
    render 'api/projects/show'
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      @project = Project.find(@comment.project_id)
      render 'api/projects/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :project_id)
  end

end
