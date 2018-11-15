import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import BrowsePlaylists from './browse_featured';
import CollectionPlaylists from './collection_playlists';
import Search from './search';
import SessionShowContainer from './session_show_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <AuthRoute exact path="/" component={App} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <ProtectedRoute exact path='/browse/featured' component={BrowsePlaylists} />
          <ProtectedRoute exact path='/collection/playlists' component={CollectionPlaylists} />
          <ProtectedRoute exact path='/search' component={Search} />
          <ProtectedRoute exact path='/settings/account' component={SessionShowContainer} />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default Root;
