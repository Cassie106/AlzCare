import React from 'react';
import './Session.css';
import { Tabs } from 'antd';
import profile from './ProfileLogo.png';
import session from './SessionLogo.png';
import activity from './ActivityLogo.png';

function Session() {
  const gotoCreateSession = () => {
    window.location.href = '/CreateSession';
  };

  const gotoSession = () => {
    window.location.href = '/Session';
  };

  const gotoActivity = () => {
    window.location.href = '/activityList';
  };

  const gotoProfile = () => {
    window.location.href = '/profile';
  };

  return (
    <div className="createSession">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab="Activity"
          key="1"
          onClick={gotoActivity}
        ></Tabs.TabPane>
        <Tabs.TabPane
          tab="Session"
          key="2"
          onClick={gotoSession}
        ></Tabs.TabPane>
        <Tabs.TabPane
          tab="Profile"
          key="3"
          onClick={gotoProfile}
        ></Tabs.TabPane>
      </Tabs>

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

export default Session;
