class Api::AlbumsController < ApplicationController

  def index
    if params[:queries]
      @albums = params[:queries] === "" ? [] : Album.where("title ILIKE '%#{params[:queries]}%'")
      @albums.includes(:songs)
    else
      @albums = Album.includes(:songs).all
    end
  end

  def show
    @album = Album.includes(songs: [:artist]).find(params[:id])
    @song_ids = @album.songs.map { |song| song.id }
  end

end
