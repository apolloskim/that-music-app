json.set! @artist.id do
  json.id @artist.id
  json.name @artist.name
  json.albumIds @album_ids
  json.coverimageUrl url_for(@artist.images[0])
end
