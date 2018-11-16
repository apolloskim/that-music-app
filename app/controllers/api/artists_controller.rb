class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find(params[:id])
    @album_ids = @artist.albums.map { |album| album.id }
  end

end
