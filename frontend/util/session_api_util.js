
export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const createCurrentlyVisited = (user_id, table_id, table, title, image_url, thumb_image_url, cover_image) => {
  return $.ajax({
    method: 'POST',
    url: `api/recently_visiteds`,
    data: {recently_visited: {user_id, table_id, table, title, image_url, thumb_image_url, cover_image}}
  });
};


export const fetchCurrentlyVisited = (id) => {
  return $.ajax({
    url: `api/users/${id}/recently_visiteds`
  });
};


window.login = login;
window.logout = logout;
window.signup = signup;
