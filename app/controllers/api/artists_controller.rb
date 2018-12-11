class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find(params[:id])
    @album_ids = @artist.albums.map { |album| album.id }
    @songs = @artist.songs.order("RANDOM()").limit(5)

  end

  def related
    @artist = Artist.find(params[:id])
    @artists = Album.where("genre='#{@artist.albums.first.genre}'").map {|album| Artist.find(album.artist_id)}.uniq
    render "/api/artists/index"
  end

end
