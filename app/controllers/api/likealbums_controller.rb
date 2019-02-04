class Api::LikealbumsController < ApplicationController

  def create
    @likealbum = Likealbum.new(likealbum_params)
    if @likealbum.save
      @user = User.find(@likealbum.user_id)
      render "/api/users/show"
    else
      render json: @likealbum.errors.full_messages, status: 401
    end
  end

  def index
    @user = User.find(params[:user_id])
    @albums = @user.like_albums.map { |like_album| Album.find(like_album.album_id) }
    render "/api/albums/index"
  end

  def destroy
    @likealbum = Likealbum.find(params[:id])
      @user = User.find(@likealbum.user_id)
    if @likealbum.destroy
      render "/api/users/show"
    end
  end

  private
  def likealbum_params
    params.require(:likealbum).permit(:user_id, :album_id)
  end
end
