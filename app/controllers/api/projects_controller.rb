class Api::ProjectsController < ApplicationController

  def index
    # make it efficient
    @projects = Project.all.includes :author
    render :index
  end

  def create
    @project = Project.create!(project_params)
  end

  def show
    # more specific info particulat project and associations
    @project = Project.find(params[:id])
    # render
  end

  def update
    @project = Project.find(params[:id])
  end

  # def destroy
  #
  # end

  private
  def project_params
    params.require(:project).permit(:title, :body, :author_id, :images)
  end

end
