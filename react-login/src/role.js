import img3 from './meleSmiling.png';
import './role.css';
import React, { Component } from 'react';

function Role() {
  const Yes = () => {
    window.location.href = '/PhoneSignUp';
  };
  const No = () => {
    window.location.href = '/onboarding';
  };

  return (
    <div className="Role">
      <h1>Are you a caregiver? </h1>
      <img src={img3} alt="2" />
      <button className="button1" onClick={Yes}>
        {' '}
        Yes{' '}
      </button>
      <button className="button2" onClick={No}>
        {' '}
        No{' '}
      </button>
    </div>
  );
}

export default Role;
