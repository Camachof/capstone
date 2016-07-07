class Api::ProjectsController < ApplicationController

  def index
    # make it efficient
    if params[:filter]
      @projects = Project.includes(:author, :comments).where("projects.body ILIKE '%#{params[:filter]}%' or projects.title ILIKE '%#{params[:filter]}%'")
    else
      @projects = Project.includes(:author, :comments)
    end
    render :index
  end

  def create
    @project = Project.create!(project_params)
    render :show
  end

  def show
    # more specific info particulat project and associations
    @project = Project.includes(:author, :comments).find(params[:id])
    render :show
  end

  def update
    @project = Project.update(params[:id], project_params)
    render :show
  end

  def destroy
    @project = Project.find(params[:id])

    if @project.destroy
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private
  def project_params
    params.require(:project).permit(:title, :body, :user_id, :images, :video_url)
  end

end
