  
export const fetchCurrentSong = (userId, id) => {
  return $.ajax({
    url: `/api/users/${userId}/songs/${id}`
  });
};
