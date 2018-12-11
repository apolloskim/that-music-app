export const createLikeArtist = (likeartist) => {
  return $.ajax({
    method: "POST",
    url: "/api/likeartists",
    data: {likeartist}
  });
};

export const deleteLikeArtist = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likeartists/${id}`
  });
};

export const fetchLikeArtists = id => {
  return $.ajax({
    url: `/api/users/${id}/likeartists`
  });
};
