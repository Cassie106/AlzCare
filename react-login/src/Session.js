import React from 'react';
import './Session.css';

function Session() {
  const session = () => {
    window.location.href = '/session';
  };
  return (
    <div className="createSession">
      <h3>Create your own session</h3>
      <div className="createSession1"></div>
      <p>Session One</p>

      <button className="button-next" onClick={session}>
        {' '}
        Confirm{' '}
      </button>
    </div>
  );
}

export default Session;
