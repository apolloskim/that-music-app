class Api::SongsController < ApplicationController

  def show
    @user = User.find(params[:user_id])
    @song = Song.find(params[:id])
    @user.update(current_song_id: @song.id)
    render :show
  end

  def index
    if (params[:songQueue] && params[:songQueue].length > 0)
      queue = params[:songQueue]
      queue = "(#{queue.join(', ')})"

      @search_results = Song.includes(:album, :artist).where("id IN #{queue}")
    else
      @search_results = params[:str] === "" ? [] : Song.with_attached_song_file.includes(:album, :artist).where("title ILIKE '%#{params[:str]}%'")
    end
  end

end
