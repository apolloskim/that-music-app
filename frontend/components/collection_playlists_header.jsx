import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class CollectionPlaylistsHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      createPlaylist: false,
      title: "",
      imageFile: null
    };
  }

  handlePlaylistClick() {
    this.setState({createPlaylist: true});
  }

  handleCloseClick() {
    this.setState({createPlaylist: false});
  }

  handleInput(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleFile(e) {
    this.setState({imageFile: e.currentTarget.files[0]});
  }

  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    const formData = new FormData();
    formData.append('playlist[title]', this.state.title);
    formData.append('playlist[creator_id]', this.props.currentUserId);
    this.props.createPlaylist(formData).then(() => {
      let playlistArr = Object.values(that.props.playlists);
      that.props.history.push(`/app/playlist/${playlistArr[playlistArr.length - 1].id}`);
    });
    this.setState({title: "", imageFile: null, createPlaylist: false});
  }


  render() {
    let playlistForm;

    if(this.state.createPlaylist) {
      playlistForm = (
        <div className="playlist-form-modal">
          <div className="playlist-form-container">
            <button className="playlist-form-close-button" onClick={this.handleCloseClick.bind(this)}>
              <img src={window.closeIcon}/>
            </button>
            <h1 className="playlist-form-header">Create new playlist</h1>
            <div className="input-box-container">
              <div className="input-box">
                <div className="input-box-content-spacing">
                  <h4 className="input-box-label">Playlist Name</h4>
                  <input type="text" className="input-box-input" placeholder="Start typing..." onChange={this.handleInput.bind(this)}/>
                </div>
              </div>
            </div>
            <div className="input-box-button">
              <div className="input-box-button-item">
                <button className="input-box-button-black input-btn" onClick={this.handleCloseClick.bind(this)}>CANCEL</button>
              </div>
              <div className="input-box-button-item">
                <button className="input-box-button-green input-btn" onClick={this.handleSubmit.bind(this)}>CREATE</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="collection-header-container">
        <nav className="active-feature-nav-header-container">
          <ul className="active-feature-nav-header-list">
            <li>
              <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/app/collection/playlists'>playlists</NavLink>
            </li>
            <li>
              <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/app/collection/tracks'>favorite songs</NavLink>
            </li>
            <li>
              <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/app/collection/albums'>albums</NavLink>
            </li>
            <li>
              <NavLink className="feature-nav-header-link" active="active-feature-nav-header" to='/app/collection/artists'>artists</NavLink>
            </li>
          </ul>
          {playlistForm}
        </nav>
        <div className="create-playlist-container" >
          <button className="create-playlist-button" onClick={(this.handlePlaylistClick.bind(this))}>NEW PLAYLIST</button>
        </div>
      </div>

    );
  }
};

const mapStateToProps = (state, ownProps)=> {
  return {
    currentUserId: state.session.currentUserId,
    playlists: state.entities.playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionPlaylistsHeader));
