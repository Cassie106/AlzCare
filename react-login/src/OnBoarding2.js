import img2 from './2.png';
import './OnBoarding2.css';
import React, { Component } from 'react';

function OnBoarding2() {
  const signUp = () => {
    window.location.href = '/Role';
  };
  const signIn = () => {
    window.location.href = '/Register';
  };

  return (
    <div className="OnBoarding2">
      <h1>Welcome</h1>
      <img src={img2} alt="2" />
      <button className="button1" onClick={signIn}>
        {' '}
        Sign In{' '}
      </button>
      <button className="button2" onClick={signUp}>
        {' '}
        Sign Up{' '}
      </button>
    </div>
  );
}

export default OnBoarding2;
