import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

export default Greeting;
