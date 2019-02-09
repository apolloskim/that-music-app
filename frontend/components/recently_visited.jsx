import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import { fetchCurrentlyVisited, receiveCurrentPressedIdx } from '../actions/session_actions';

class RecentlyVisited extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleReverse(arr) {
    let newArr = [];
    let playingPage = merge([], arr);
    playingPage.forEach(p => newArr.unshift(p));

    return newArr;
  }

  componentDidMount() {
    this.props.fetchCurrentlyVisited(this.props.currentUserId);
  }


  handleClick(idx) {
    let that = this;
    return e => {
      that.props.receiveCurrentPressedIdx(idx);
    }
  }


  render() {
    let recentlyPlayedList;
    if (this.props.currentPlayingPage.length !== 0) {
      let recentVisited = this.handleReverse(this.props.currentPlayingPage).slice(0, 5);
      let that = this;
      recentlyPlayedList = recentVisited.map ((table, idx) => {
        let tableLink;
        if (table.table === 'artist') {
          tableLink = `/app/artist/${table.table_id ? table.table_id : ""}/overview`;
        } else if (table.table === 'album') {
          tableLink = `/app/album/${table.table_id ? table.table_id : ""}`;
        } else {
          tableLink = `/app/playlist/${table.table_id ? table.table_id : ""}`;
        }


        return (
          <li key={idx} className="navbar-item-small">
            <div>
              <Link to={tableLink} onClick={this.handleClick(idx)} className={that.props.currentIdx === idx && (that.props.history.location.pathname === `/app/${table.table}/${table.table_id}` || that.props.history.location.pathname === `/app/${table.table}/${table.table_id}/overview`) ? "navbar-link recently-played-active" : "navbar-link"}>
                <div className="navbar-link-text">
                  <div className="navbar-link-text-inside">
                    <div className="ellipsis-one-line">{table.title}</div>
                    <span className="recently-played-table">{table.table}</span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        )
      });
    }

    return (
      <div>
        <h2 className="navbar-group-header">RECENTLY PLAYED</h2>
        <ul>
          {recentlyPlayedList ? recentlyPlayedList : ""}
        </ul>
      </div>
    );
  }
}

const msp = state => {
  return {
    currentPlayingPage: state.currentPlayingPage,
    currentUserId: state.session.currentUserId,
    currentIdx: state.ui.currentIdx
  };
};

const mdp = dispatch => {
  return {
    fetchCurrentlyVisited: id => dispatch(fetchCurrentlyVisited(id)),
    receiveCurrentPressedIdx: id => dispatch(receiveCurrentPressedIdx(id))
  };
};

export default withRouter(connect(msp, mdp)(RecentlyVisited));
