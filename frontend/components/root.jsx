import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import BrowsePlaylists from './browse_featured';
import CollectionPlaylists from './collection_playlists';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path='/signup' component={SignupFormContainer} />
          <Route exact path='/login' component={LoginFormContainer} />
          <Route exact path='/browse/featured' component={BrowsePlaylists} />
          <Route exact path='/collection/playlists' component={CollectionPlaylists} />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default Root;
