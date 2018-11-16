json.set! user.id do
  json.id user.id
  json.username user.username
  json.playlistIds user.playlists.map { |playlist| playlist.id }
end

json.extract! user, :id, :username
