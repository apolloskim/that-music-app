import * as AlbumApiUtil from '../util/album_api_utils';
import * as LikeAlbumApiUtil from '../util/like_album_api_utils';


export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_LIKE_ALBUM = 'RECEIVE_LIKE_ALBUM';
export const RECEIVE_VISITED_ALBUM = 'RECEIVE_VISITED_ALBUM';
export const REMOVE_ALBUMS = 'REMOVE_ALBUMS';

export const fetchAlbums = (queries) => dispatch => {
  return AlbumApiUtil.fetchAlbums(queries).then( albums => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = (id) => dispatch => {
  return AlbumApiUtil.fetchAlbum(id).then( album => dispatch(receiveAlbum(album)));
};

export const fetchVisitedAlbum = (id) => dispatch => {
  return AlbumApiUtil.fetchAlbum(id).then( album => dispatch(receiveVisitedAlbum(album)));
};

export const receiveVisitedAlbum = (album) => {
  return {
    type: RECEIVE_VISITED_ALBUM,
    album
  };
};

export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const removeAlbums = () => {
  return {
    type: REMOVE_ALBUMS
  };
};

export const createLikeAlbum = (user_id, album_id) => dispatch => {
  return LikeAlbumApiUtil.createLikeAlbum({user_id, album_id}).then( user => dispatch(receiveLikeAlbum(user)) );
}

export const deleteLikeAlbum = (id) => dispatch => {
  return LikeAlbumApiUtil.deleteLikeAlbum(id).then( user => dispatch(receiveLikeAlbum(user)));
}

export const fetchLikeAlbums = id => dispatch => {
  return LikeAlbumApiUtil.fetchLikeAlbums(id).then( albums => dispatch(receiveAlbums(albums)));
}

export const receiveLikeAlbum = user => {
  return {
    type: RECEIVE_LIKE_ALBUM,
    user
  };
}

export const receiveAlbum = ({album, songs}) => {
  return {
    type: RECEIVE_ALBUM,
    album,
    songs
  };
};
