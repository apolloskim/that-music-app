json.extract! user, :id, :username
json.playlistIds user.playlists.map { |playlist| playlist.id }


json.currentSong do
  json.id @current_song.id
  json.title @current_song.title
  json.songUrl url_for(@current_song.song_file)
  json.album @current_song.album.title
  json.artist @current_song.artist.name
  json.albumCover url_for(@current_song.album.image)
end
