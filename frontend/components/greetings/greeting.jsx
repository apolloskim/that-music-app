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
      <ul className="nav navbar-nav navbar-right nav-main">
        <li>
          <a className="auth-link sidepanel-bold" href="https://angel.co/apollos-kim?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar">AngelList</a>
        </li>
        <li>
          <a className="auth-link sidepanel-bold" href="https://www.linkedin.com/in/apollos-kim-2bb1a4171/">Linkedin</a>
        </li>
        <li>
          <a className="auth-link sidepanel-bold" href="https://github.com/apolloskim">Github</a>
        </li>
        <li role="separator" className="divider sidepanel-divider"></li>
        <li>
          <Link className="auth-link sidepanel-normal" to="/signup">Sign up</Link>
        </li>
        <li>
          <Link className="auth-link sidepanel-normal" to="/login">Log in</Link>
        </li>
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
