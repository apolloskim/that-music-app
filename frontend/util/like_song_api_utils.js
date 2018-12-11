

export const createLikeSong = (likesong) => {
  return $.ajax({
    method: "POST",
    url: "/api/likesongs",
    data: {likesong}
  });
};

export const deleteLikeSong = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likesongs/${id}`
  });
};

export const fetchLikeSongs = id => {
  return $.ajax({
    url: `/api/users/${id}/likesongs`
  });
};
