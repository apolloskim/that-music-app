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
    @playlistsong.destroy
  end

  private

  def playlistsong_params
    params.require(:playlistsong).permit(:playlist_id, :song_id)
  end
end
