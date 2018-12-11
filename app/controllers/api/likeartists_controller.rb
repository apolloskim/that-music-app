class Api::LikeartistsController < ApplicationController
  def create
    @likeartist = Likeartist.new(likeartist_params)
    if @likeartist.save
      render json: ["Saved to your Library"]
    else
      render json: @likeartist.errors.full_messages, status: 401
    end
  end

  def index
    @user = User.find(params[:user_id])
    @albums = @user.like_artists.map { |like_artist| Album.find(like_artist.artist_id) }
    render "/api/artists/index"

  end

  private
  def likeartist_params
    params.require(:likeartist).permit(:user_id, :artist_id)
  end
end
