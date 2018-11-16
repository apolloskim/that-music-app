@playlists.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.title playlist.title
    json.creator_id playlist.creator_id
    json.playlistSongIds playlist.songs.map { |song| song.id }
    json.imageUrl url_for(playlist.image)
  end
end
