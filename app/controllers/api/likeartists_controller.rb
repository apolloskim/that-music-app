class Api::LikeartistsController < ApplicationController
  def create
    @likeartist = Likeartist.new(likeartist_params)
    if @likeartist.save
      @user = User.find(@likeartist.user_id)
      render "/api/users/show"
    else
      render json: @likeartist.errors.full_messages, status: 401
    end
  end

  def index
    @user = User.find(params[:user_id])
    @artists = @user.like_artists.map { |like_artist| Artist.find(like_artist.artist_id) }
    render "/api/artists/index"

  end

  def destroy
    @likeartist = Likeartist.find(params[:id])
    @user = User.find(@likeartist.user_id)
    if @likeartist.destroy
      render "/api/users/show"
    end
  end

  private
  def likeartist_params
    params.require(:likeartist).permit(:user_id, :artist_id)
  end
end
