

export const fetchArtists = (queries) => {
  return $.ajax({
    url: `/api/artists`,
    data: {queries}
  });
};

export const fetchArtist = (id) => {
  return $.ajax({
    url: `/api/artists/${id}`
  });
};
