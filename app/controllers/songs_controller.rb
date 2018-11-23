class SongsController < ApplicationController

  def show
    @user = User.find(params[:user_id])
    @song = Song.find(params[:id])
    @user.current_song_id = @song.id
    render :show
  end

  def search
    @search_results = Song.all.map { |song| song.title.downcase }.select { |word| word.match(/#{params[:str]}/)}
    render :index
  end
end
