@search_results.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.album song.album.title
    json.albumId song.album.id
    json.artist song.artist.name
    json.artistId song.artist.id
    json.albumCover song.album.cover_image
    json.songUrl url_for(song.song_file)
    json.explicit song.explicit
    json.duration song.duration
  end
end
