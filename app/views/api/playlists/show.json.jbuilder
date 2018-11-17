json.playlist do
  json.id @playlist.id
  json.title @playlist.title
  json.creator_id @playlist.creator_id
  json.playlistSongIds @playlist_song_ids
  json.songCount @playlist_song_ids.size
  json.imageUrl url_for(@playlist.image)
end

json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.albumId song.album_id
      json.songUrl url_for(song.song_file)
    end
  end
end
