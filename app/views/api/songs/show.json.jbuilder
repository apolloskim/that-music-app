json.set! @song.id do
  json.id @song.id
  json.title @song.title
  json.album_id @song.album_id
  json.coverImageUrl url_for(@album.image)
end
