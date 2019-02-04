@artists.each do |artist|

  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.albumIds artist.albums.map { |album| album.id }
    json.thumbImageUrl artist.thumbnail_image
  end
end
