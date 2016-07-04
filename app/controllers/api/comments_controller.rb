class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.create!(comment_params)
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id)
  end

end
