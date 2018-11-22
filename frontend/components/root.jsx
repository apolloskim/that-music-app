import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import Splash from './splash_page';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import BrowsePlaylists from './browse_featured';
import BrowseGenres from './browse_genres';
import BrowseNewReleases from './browse_newreleases';
import PlaylistShowContainer from './playlist_show_container';
import AlbumShowContainer from './album_show_container';
import CollectionPlaylists from './collection_playlists';
import CollectionFavoriteSongs from './collection_favorite_songs';
import CollectionAlbums from './collection_albums';
import CollectionArtists from './collection_artists';
import Search from './search';
import SessionShowContainer from './session_show_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';


const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <AuthRoute exact path="/" component={Splash} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <ProtectedRoute exact path='/browse/featured' component={BrowsePlaylists} />
          <ProtectedRoute exact path='/browse/genres' component={BrowseGenres} />
          <ProtectedRoute exact path='/browse/newreleases' component={BrowseNewReleases} />
          <ProtectedRoute exact path='/collection/playlists' component={CollectionPlaylists} />
          <ProtectedRoute exact path='/collection/tracks' component={CollectionFavoriteSongs} />
          <ProtectedRoute exact path='/collection/albums' component={CollectionAlbums} />
          <ProtectedRoute exact path='/collection/artists' component={CollectionArtists} />
          <ProtectedRoute exact path='/search' component={Search} />
          <ProtectedRoute exact path='/settings/account' component={SessionShowContainer} />
          <ProtectedRoute exact path={`/playlist/:playlistId`} component={PlaylistShowContainer} />
          <ProtectedRoute exact path={`/album/:albumId`} component={AlbumShowContainer} />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default Root;
