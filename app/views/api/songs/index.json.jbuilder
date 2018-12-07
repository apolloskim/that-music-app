@search_results.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.album song.album.title
    json.artist song.artist.name
    json.albumCover song.album.cover_image
    json.songUrl url_for(song.song_file)
    json.explicit song.explicit
  end
end
