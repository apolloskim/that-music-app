class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      @current_song = current_song(@user)
      render '/api/users/show'
    else
      render json: ["invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ['no logged in user'], status: 404
    end
  end

end
