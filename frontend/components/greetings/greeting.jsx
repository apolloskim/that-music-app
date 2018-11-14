import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  let logged_or_not;
  if (props.currentUser) {
    logged_or_not = (
      <div>
        <h1>{props.currentUser.username}</h1>
        <button onClick={props.logout}>logout</button>
      </div>
    );
  } else {
    logged_or_not = (
      <ul className="signup-login">
        <li><Link className="auth-link" to="/signup">Sign up</Link></li>
        <li><Link className="auth-link" to="/login">Log in</Link></li>
      </ul>
    );
  }

  return (
    <div>
      {logged_or_not}
    </div>
  );
};

export default Greeting;
