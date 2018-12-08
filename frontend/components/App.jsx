import React from 'react';
import MediaQuery from 'react-responsive';
import GreetingContainer from './greetings/greeting_container';
import {Route} from 'react-router-dom';
import Navbar from './navbar/navbar';
import PlaybarContainer from './playbar-container';
import BrowsePlaylists from './browse_featured';
import BrowseGenres from './browse_genres';
import BrowseNewReleases from './browse_newreleases';
import PlaylistShowContainer from './playlist_show_container';
import AlbumShowContainer from './album_show_container';
import ArtistShowContainer from './artist/artist_show_container';
import CollectionPlaylists from './collection_playlists';
import CollectionFavoriteSongs from './collection_favorite_songs';
import CollectionAlbums from './collection_albums';
import CollectionArtists from './collection_artists';
import SearchContainer from './search';
import SessionShowContainer from './session_show_container';
import {ProtectedRoute} from '../util/route_util';


const App = () => {
  // Linear gradient array of different values
  let gradients = [
    {
      one: "linear-gradient(rgb(57, 63, 96), rgb(6, 6, 10) 85%)",
      two: "linear-gradient(rgb(30, 50, 100), rgb(4, 6, 12) 85%)"
    },
    {
      one: "linear-gradient(rgb(32, 28, 27), rgb(8, 7, 7) 85%)",
      two: "linear-gradient(rgb(30, 50, 100), rgb(4, 6, 12) 85%)"
    },
    {
      one: "linear-gradient(rgb(66, 71, 87), rgb(7, 7, 9) 85%)",
      two: "linear-gradient(rgb(48, 28, 54), rgb(9, 5, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(18, 18, 18), rgb(8, 8, 8) 85%)",
      two: "linear-gradient(rgb(48, 28, 54), rgb(9, 5, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)",
      two: "linear-gradient(rgb(83, 76, 70), rgb(8, 8, 7) 85%)"
    },
    {
      one: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)",
      two: "linear-gradient(rgb(54, 79, 99), rgb(5, 8, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)",
      two: "linear-gradient(rgb(116, 37, 58), rgb(12, 4, 6) 85%)"
    },
    {
      one: "linear-gradient(rgb(50, 103, 94), rgb(5, 10, 9) 85%)",
      two: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(149, 97, 4), rgb(15, 10, 0) 85%)",
      two: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(52, 52, 52), rgb(8, 8, 8) 85%)",
      two: "linear-gradient(rgb(28, 28, 43), rgb(6, 6, 9) 85%)"
    },
    {
      one: "linear-gradient(rgb(30, 50, 100), rgb(4, 6, 12) 85%)",
      two: "linear-gradient(rgb(28, 28, 43), rgb(6, 6, 9) 85%)"
    },
    {
      one: "linear-gradient(rgb(89, 54, 99), rgb(9, 5, 10) 85%)",
      two: "linear-gradient(rgb(30, 50, 100), rgb(4, 6, 12) 85%)"
    },
    {
      one: "linear-gradient(rgb(93, 60, 87), rgb(9, 6, 9) 85%)",
      two: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(66, 87, 69), rgb(7, 9, 7) 85%)",
      two: "linear-gradient(rgb(54, 80, 99), rgb(5, 8, 10) 85%)"
    },
    {
      one: "linear-gradient(rgb(69, 81, 84), rgb(7, 8, 8) 85%)",
      two: "linear-gradient(rgb(30, 50, 100), rgb(4, 6, 12) 85%)"
    },
  ];

  const randomIdx = Math.floor(Math.random()*gradients.length);

  const backgroundOne = {
    backgroundImage: gradients[randomIdx].one
  };

  const backgroundTwo = {
    backgroundImage: gradients[randomIdx].two
  };

  return (
    <div>
      <div className="background-image one" style={backgroundOne}>
        <div className="background-image background-opacity two" style={backgroundTwo}>
        </div>
      </div>
      <div className="root-top-container">
          <Navbar />
          <ProtectedRoute path='/app/browse/featured' component={BrowsePlaylists} />
          <ProtectedRoute path='/app/browse/genres' component={BrowseGenres} />
          <ProtectedRoute path='/app/browse/newreleases' component={BrowseNewReleases} />
          <ProtectedRoute path='/app/collection/playlists' component={CollectionPlaylists} />
          <ProtectedRoute path='/app/collection/tracks' component={CollectionFavoriteSongs} />
          <ProtectedRoute path='/app/collection/albums' component={CollectionAlbums} />
          <ProtectedRoute path='/app/collection/artists' component={CollectionArtists} />
          <ProtectedRoute path='/app/search' component={SearchContainer} />
          <ProtectedRoute path='/app/settings/account' component={SessionShowContainer} />
          <ProtectedRoute path={`/app/playlist/:playlistId`} component={PlaylistShowContainer} />
          <ProtectedRoute path={`/app/album/:albumId`} component={AlbumShowContainer} />
          <ProtectedRoute path={`/app/artist/:artistId`} component={ArtistShowContainer} />
          <PlaybarContainer />
      </div>
    </div>


  );
};

export default App;
