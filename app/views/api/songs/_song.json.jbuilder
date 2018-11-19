json.song do
  json.id song.id
  json.title song.title
  json.album song.album.title
  json.artist song.artist.name
  json.imageUrl url_for(song.album.image)
  json.songUrl url_for(song.song_file)
end
