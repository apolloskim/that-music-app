@artists.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.albumIds artist.albums.map { |album| album.id }
    json.coverimageUrl url_for(artist.images[0])
  end
end
