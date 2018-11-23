json.song do
  json.id song.id
  json.title song.title
  json.album song.album.title
  json.artist song.artist.name
  json.albumCover url_for(song.album.image)
  json.songUrl url_for(song.song_file)
  json.explicit song.explicit
end
