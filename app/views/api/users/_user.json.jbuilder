json.extract! user, :id, :username
json.playlistIds user.playlists.map { |playlist| playlist.id }


if currentSong
  json.currentSong do
    json.song do
      json.id currentSong.id
      json.title currentSong.title
      json.songUrl url_for(currentSong.song_file)
      json.album currentSong.album.title
      json.artist currentSong.artist.name
      json.albumCover url_for(currentSong.album.image)
      json.explicit currentSong.explicit
    end
  end
end

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.id playlist.id
      json.title playlist.title
      json.creator_id playlist.creator_id
      json.playlistSongIds playlist.songs.map { |song| song.id }
      json.imageUrl url_for(playlist.image)
    end
  end
end
