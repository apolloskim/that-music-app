
export const fetchAlbums = () => {
  return $.ajax({
    url: "/api/albums"
  });
};

export const fetchAlbum = (id) => {
  return $.ajax({
    url: `/api/albums/${id}`
  });
};
