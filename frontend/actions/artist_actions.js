import * as ArtistApiUtil from '../util/artist_api_utils';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const fetchArtists = () => dispatch => {
  return ArtistApiUtil.fetchArtists().then(artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = () => dispatch => {
  return ArtistApiUtil.fetchArtist().then(artist => dispatch(receiveArtist(artist)));
};

export const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};
