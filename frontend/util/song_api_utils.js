
export const fetchCurrentSong = (id) => {
  return $.ajax({
    url: `/api/songs/${id}`
  });
};
