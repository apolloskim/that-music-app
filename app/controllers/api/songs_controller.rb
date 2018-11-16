class Api::SongsController < ApplicationController

  def show
    @song = Song.find(params[:id])
    @album = Album.find(@song.album_id)
  end

end
