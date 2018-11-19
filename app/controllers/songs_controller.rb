class SongsController < ApplicationController

  def show
    @user = User.find(params[:user_id])
    @song = Song.find(params[:id])
    @user.current_song_id = @song.id
    render :show
  end

end
