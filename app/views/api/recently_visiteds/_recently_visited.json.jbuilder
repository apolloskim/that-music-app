recently_visited.each do |visit|
  json.set! visit.id do
    json.id visit.id
    json.table visit.table
    json.title visit.title
    json.table_id visit.table_id
    json.user_id visit.user_id
    json.playlistImage visit.image_url
    json.artistImage visit.thumb_image_url
    json.albumImage visit.cover_image
  end
end
