@albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.title album.title
    json.year album.year
    json.artistId album.artist_id
    json.artistName album.artist.name
    json.songIds album.songs.map { |song| song.id }
    json.genre album.genre
    json.imageUrl album.cover_image
    json.publisher album.publisher
  end
end
