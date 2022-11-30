import React from 'react';
import './NewSession.css';
import { PageHeader } from 'antd';
import radarChart from './radarChart.png';

function NewSession() {
  const gotoCreateSession = () => {
    window.location.href = '/CreateSession';
  };
  return (
    <div className="createSession">
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        title="Create Session"
        subTitle="Customizing your own session from the catagory below."
      />
      <div className="createSession__container">
        <h3>Create your own session</h3>
        <label>Session Name</label>
        <input type="text" placeholder="Enter Session Name" />
      </div>
      <div className="type_choice">
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
            Others
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
