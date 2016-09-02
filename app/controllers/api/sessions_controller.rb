class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render(json: {base: ["Invalid username or password!"]}, status: 401)
    else
      login!(@user)
      render "api/users/show"
    end
  end

  def destroy
    @user = current_user
    if @user
      logout_user!
      render json: {}
    else
      render(json: {base: ["Nobody signed in!"]}, status: 404)
    end
  end

end
