class Api::LikesongsController < ApplicationController

  def create
    @likesong = Likesong.new(likesong_params)
    if @likesong.save
      render json: ["Added to your Favorite Songs"]
    else
      render json: @likesong.errors.full_messages, status: 401
    end
  end

  def index
    @user = User.find(params[:user_id])
    @search_results = @user.like_songs.map { |like_song| Song.find(like_song.song_id) }
    render "/api/songs/index"

  end

  private
  def likesong_params
    params.require(:likesong).permit(:user_id, :song_id)
  end
end
