import * as AlbumApiUtil from '../util/album_api_utils';
import * as LikeAlbumApiUtil from '../util/like_album_api_utils';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const fetchAlbums = () => dispatch => {
  return AlbumApiUtil.fetchAlbums().then( albums => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = (id) => dispatch => {
  return AlbumApiUtil.fetchAlbum(id).then( album => dispatch(receiveAlbum(album)));
};

export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const createLikeAlbum = (user_id, album_id) => dispatch => {
  return LikeAlbumApiUtil.createLikeAlbum({user_id, album_id}).then( response => console.log(response), err => (dispatch(receiveErrors(err.responseJSON))) );
}

export const deleteLikeAlbum = (id) => dispatch => {
  return LikeAlbumApiUtil.deleteLikeAlbum(id).then( playlist => dispatch(receiveQueriedSongs(playlist)));
}

export const fetchLikeAlbums = id => dispatch => {
  return LikeAlbumApiUtil.fetchLikeAlbums(id).then( albums => dispatch(receiveAlbums(albums)));
}

export const receiveAlbum = ({album, songs}) => {
  return {
    type: RECEIVE_ALBUM,
    album,
    songs
  };
};
