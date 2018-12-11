export const createLikeAlbum = (likealbum) => {
  return $.ajax({
    method: "POST",
    url: "/api/likealbums",
    data: {likealbum}
  });
};

export const deleteLikeAlbum = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likealbums/${id}`
  });
};

export const fetchLikeAlbums = id => {
  return $.ajax({
    url: `/api/users/${id}/likealbums`
  });
};
