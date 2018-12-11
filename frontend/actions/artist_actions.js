import * as ArtistApiUtil from '../util/artist_api_utils';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const fetchArtists = () => dispatch => {
  return ArtistApiUtil.fetchArtists().then(artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = (id) => dispatch => {
  return ArtistApiUtil.fetchArtist(id).then(artist => {
    dispatch(receiveArtist(artist))
  });
};

export const createLikeArtist = (user_id, artist_id) => dispatch => {
  return LikeArtistApiUtil.createLikeArtist({user_id, artist_id}).then( response => console.log(response), err => (dispatch(receiveErrors(err.responseJSON))) );
}

export const deleteLikeArtist = (id) => dispatch => {
  return LikeArtistApiUtil.deleteLikeArtist(id).then( playlist => dispatch(receiveQueriedSongs(playlist)));
}

export const fetchLikeArtists = id => dispatch => {
  return LikeArtistApiUtil.fetchLikeArtists(id).then( artists => dispatch(receiveArtists(artists)));
}


export const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

export const receiveArtist = ({artist, songs, albums}) => {
  return {
    type: RECEIVE_ARTIST,
    artist,
    songs,
    albums
  };
};
