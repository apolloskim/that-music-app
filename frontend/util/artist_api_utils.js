
export const fetchArtists = () => {
  return $.ajax({
    url: `/api/artists`
  });
};

export const fetchArtist = (id) => {
  return $.ajax({
    url: `/api/artists/${id}`
  });
};
