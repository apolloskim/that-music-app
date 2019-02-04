import * as ArtistApiUtil from '../util/artist_api_utils';
import * as LikeArtistApiUtil from '../util/like_artist_api_utils';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const REMOVE_ARTISTS = 'REMOVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_LIKE_ARTIST = 'RECEIVE_LIKE_ARTIST';
export const RECEIVE_VISITED_ARTIST = 'RECEIVE_VISITED_ARTIST';


export const fetchArtists = queries => dispatch => {
  return ArtistApiUtil.fetchArtists(queries).then(artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = (id) => dispatch => {
  return ArtistApiUtil.fetchArtist(id).then(artist => {
    dispatch(receiveArtist(artist))
  });
};

export const fetchVisitedArtist = id => dispatch => {
  return ArtistApiUtil.fetchArtist(id).then(artist => {
    dispatch(receiveVisitedArtist(artist))
  });
}

export const receiveVisitedArtist = artist => {
  return {
    type: RECEIVE_VISITED_ARTIST,
    artist
  }
}

export const createLikeArtist = (user_id, artist_id) => dispatch => {
  return LikeArtistApiUtil.createLikeArtist({user_id, artist_id}).then( user => dispatch(receiveLikeArtist(user)));
}

export const deleteLikeArtist = (id) => dispatch => {
  return LikeArtistApiUtil.deleteLikeArtist(id).then( user => dispatch(receiveLikeArtist(user)));
}

export const fetchLikeArtists = id => dispatch => {
  return LikeArtistApiUtil.fetchLikeArtists(id).then( artists => dispatch(receiveArtists(artists)));
}

export const deleteArtists = () => {
  return {
    type: REMOVE_ARTISTS
  }
};

export const receiveLikeArtist = user => {
  return {
    type: RECEIVE_LIKE_ARTIST,
    user
  };
};


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
