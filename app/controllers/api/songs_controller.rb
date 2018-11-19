class Api::SongsController < ApplicationController

  def show
    @user = User.find(params[:user_id])
    @song = Song.find(params[:id])
    @user.update(current_song_id: @song.id)
    render :show
  end

end
