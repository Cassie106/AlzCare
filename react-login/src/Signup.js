import './Signup.css';
import React, { Component } from 'react';

function Signup() {
  const changeAuthMode = () => {
    window.location.href = '/register';
  };

  return (
    <div className="Signup">
      <h1>Create your caregiver account</h1>
      <div className="Signup-form-container">
        <form className="Signup-form">
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="FristName"
              className="form-control mt-1"
              placeholder="Enter First Name"
            />
            <label>Last Name</label>
            <input
              type="LastName"
              className="form-control mt-1"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          {/* <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div> */}
        </form>
        <button className="button-signup" onClick={changeAuthMode}>
          {' '}
          Enter{' '}
        </button>
      </div>
    </div>
  );
}

export default Signup;
