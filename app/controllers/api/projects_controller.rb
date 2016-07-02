class Api::ProjectsController < ApplicationController

  def index
    # make it efficient
    @projects = Project.includes(:author)
    render :index
  end

  def create
    @project = Project.create!(project_params)
    render :show
  end

  def show
    # more specific info particulat project and associations
    @project = Project.includes(:author).find(params[:id])
    render :show
  end

  def update
    @project = Project.find(params[:id])
  end

  # def destroy
  #
  # end

  private
  def project_params
    params.require(:project).permit(:title, :body, :user_id, :images)
  end

end
