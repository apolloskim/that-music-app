class Api::ArtistsController < ApplicationController

  def index
    if params[:queries]
      @artists = params[:queries] === "" ? [] : Artist.where("name ILIKE '%#{params[:queries]}%'")
    else
      @artists = Artist.includes(:albums, :songs).all
    end
  end

  def show
    @artist = Artist.includes(:albums, :songs).find(params[:id])
    @album_ids = @artist.albums.map { |album| album.id }
    @songs = @artist.songs.order("RANDOM()").limit(5)

  end

  def related
    @artist = Artist.includes(:albums, :songs).find(params[:id])
    @artists = Album.includes(:songs).where("genre='#{@artist.albums.first.genre}'").map {|album| Artist.find(album.artist_id)}.uniq
    render "/api/artists/index"
  end

end
