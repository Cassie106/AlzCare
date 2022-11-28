import React from 'react';
import './NewSession.css';
import { Col, Row } from 'antd';

function NewSession() {
  const gotoCreateSession = () => {
    window.location.href = '/CreateSession';
  };
  return (
    <div className="createSession">
      <div className="createSession__container">
        <h3>Create your own session</h3>
        <label>Session Name</label>
        <input type="text" placeholder="Enter Session Name" />
      </div>
      <div className="interest">
        <label>Category</label>
        <br></br>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-primary">
            Music
          </button>
          <button type="button" class="btn btn-outline-primary">
            Art
          </button>
          <button type="button" class="btn btn-outline-primary">
            Math
          </button>
          <button type="button" class="btn btn-outline-primary">
            Sports
          </button>
          <button type="button" class="btn btn-outline-primary">
            Science
          </button>
          <button type="button" class="btn btn-outline-primary">
            Cook
          </button>
        </div>
      </div>

      <button className="button-next" onClick={gotoCreateSession}>
        {' '}
        Confirm{' '}
      </button>
    </div>
  );
}

export default NewSession;
