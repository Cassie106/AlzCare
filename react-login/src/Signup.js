import './Signup.css';
import React, { Component } from 'react';

function Signup() {
  const changeAuthMode = () => {
    window.location.href = '/register';
  };

  return (
    <div className="signup">
      <div className="signUpEmail">
        <h1 className="title">Enter your name and email</h1>
        <div className="nameForm">
          <div className="FirstName">
            <label> First Name</label>
            <br></br>
            <input
              type="FristName"
              className="form-control mt-1"
              placeholder="Enter First Name"
            />
          </div>
          <div className="LastName">
            <label>Last Name</label>
            <br></br>
            <input
              type="LastName"
              className="form-control mt-1"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <br></br>
        <div className="email">
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkBox" />
          <label for="checkBox">Email me tips to get the most of O-FUN</label>
        </div>
      </div>

      <div className="condition">
        By continuing, you agree to our Terms and conditions and Privacy Policy
      </div>

      <button className="button-enter" onClick={changeAuthMode}>
        {' '}
        Enter{' '}
      </button>
    </div>
  );
}

export default Signup;
