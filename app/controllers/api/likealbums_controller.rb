class Api::LikealbumsController < ApplicationController

  def create
    @likealbum = Likealbum.new(likealbum_params)
    if @likealbum.save
      render json: ["Saved to your Library"]
    else
      render json: @likealbum.errors.full_messages, status: 401
    end
  end

  def index
    @user = User.find(params[:user_id])
    @albums = @user.like_albums.map { |like_album| Album.find(like_album.album_id) }
    render "/api/albums/index"

  end

  private
  def likealbum_params
    params.require(:likealbum).permit(:user_id, :album_id)
  end
end
