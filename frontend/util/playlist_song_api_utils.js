
export const createPlaylistSong = (playlistsong) => {
  return $.ajax({
    method: "POST",
    url: "/api/playlistsongs",
    data: {playlistsong}
  });
};
