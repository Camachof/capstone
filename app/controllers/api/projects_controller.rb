class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render :index
  end

  def new
    @project = Project.new
    render :new
  end

  def create
    @project = Project.create!(project_params)
    # render
  end

  def show
    @project = Project.find(params[:id])
    # render
  end

  # def update
  #   @project = Project.find(params[:id])
  # end

  # def destroy
  #
  # end

  private
  def project_params
    params.require(:project).permit(:title, :body, :author_id)
  end

end
