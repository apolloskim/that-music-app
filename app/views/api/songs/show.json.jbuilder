json.partial! '/api/songs/song', song: @song

#
# json.extract! @song, :id, :title
# json.album @song.album.title
# json.artist @song.artist
# json.imageUrl url_for(@song.album.image)
# json.songUrl url_for(@song.song_file)
