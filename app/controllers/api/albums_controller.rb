class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
    @song_ids = @album.songs.map { |song| song.id }
  end

end
