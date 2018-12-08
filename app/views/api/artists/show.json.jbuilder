json.set! @artist.id do
  json.id @artist.id
  json.name @artist.name
  json.albumIds @album_ids
  json.thumbImageUrl @artist.thumbnail_image
  json.coverImageUrl @artist.main_image
end
