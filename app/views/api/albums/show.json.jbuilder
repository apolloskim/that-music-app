json.album do
  json.id @album.id
  json.title @album.title
  json.year @album.year
  json.artistName @album.artist.name
  json.songIds @song_ids
  json.genre @album.genre
  json.imageUrl url_for(@album.image)
  json.songCount @album.songs.size
end

json.songs do
  @album.songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.album song.album.title
      json.artist song.artist.name
      json.duration song.duration
      json.explicit song.explicit
    end
  end
end
