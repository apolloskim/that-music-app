import * as AlbumApiUtil from '../util/album_api_utils';

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

export const receiveAlbum = ({album, songs}) => {
  return {
    type: RECEIVE_ALBUM,
    album,
    songs
  };
};
