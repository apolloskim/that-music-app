json.set! @playlist.id do
  json.id @playlist.id
  json.title @playlist.title
  json.creator_id @playlist.creator_id
  json.playlistSongIds @playlist_song_ids
  json.followerIds @follower_ids
  json.imageUrl url_for(@playlist.image)
end
