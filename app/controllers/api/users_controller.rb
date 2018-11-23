class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @current_song = current_song(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      @current_song = current_song(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    User.destroy(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
