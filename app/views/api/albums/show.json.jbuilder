json.set! @album.id do
  json.id @album.id
  json.title @album.title
  json.year @album.year
  json.artistId @album.artist_id
  json.songIds @song_ids
  json.genre @album.genre
  json.imageUrl url_for(@album.image)
end
