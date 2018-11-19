json.extract! user, :id, :username
json.playlistIds user.playlists.map { |playlist| playlist.id }


# json.currentSong do
#   json.id currentSong.id
#   json.title currentSong.title
#   json.songUrl url_for(currentSong.song_file)
#   json.album currentSong.album.title
#   json.artist currentSong.artist.name
#   json.albumCover url_for(currentSong.album.image)
# end
