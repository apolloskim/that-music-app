class Api::PlaylistsongsController < ApplicationController

  def create

    @playlistsong = Playlistsong.new(playlistsong_params)
    if @playlistsong.save
      render json: ["Track was added to your playlist"]
    else
      render json: @playlistsong.errors.full_messages, status: 401
    end
  end

  def destroy

    @playlistsong = Playlistsong.find(params[:id])
    @playlist_id = @playlistsong.playlist_id

    if @playlistsong.destroy
      @playlist = Playlist.find(@playlist_id)
      @playlist_song_ids = @playlist.songs.map { |song| song.id }
      @creator = User.find(@playlist.creator_id)
      render "/api/playlists/show"
    end
  end

  private

  def playlistsong_params
    params.require(:playlistsong).permit(:playlist_id, :song_id)
  end
end
