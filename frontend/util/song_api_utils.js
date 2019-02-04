
export const fetchCurrentSong = (userId, id) => {
  return $.ajax({
    url: `/api/users/${userId}/songs/${id}`
  });
};

export const searchSong = (str, songQueue) => {
  const res = $.ajax({
    url: "/api/songs/",
    data: {str, songQueue}
  });
  return res;
};
