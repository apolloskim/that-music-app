
export const fetchAlbums = (queries) => {
  return $.ajax({
    url: "/api/albums",
    data: {queries}
  });
};

export const fetchAlbum = (id) => {
  return $.ajax({
    url: `/api/albums/${id}`
  });
};
