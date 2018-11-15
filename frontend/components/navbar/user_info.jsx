import React from 'react';
import {Link} from 'react-router-dom';

const UserInfo = (props) => {

  const logged_or_not = (
    <div>
      <h1 className="session-name">{props.currentUser.username}</h1>
      <button onClick={props.logout}>logout</button>
    </div>
  );

  return (
    <div>
      {logged_or_not}
    </div>
  );
};

export default UserInfo;
