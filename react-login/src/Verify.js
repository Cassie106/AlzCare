import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import './Verify.css';

const CORRECT_PIN_CODE = '151022';

function Verify() {
  const signup = () => {
    window.location.href = './Signup';
  };

  const phoneSignUp = () => {
    window.location.href = './phoneSignUp';
  };

  return (
    <div className="Verify">
      <div className="code-box">
        <h1 className="title">
          Enter the 6-digit verification code we send you
        </h1>
        <br></br>
        <ReactCodeInput type="number" fields={6} />
      </div>
      <button className="button-enter" onClick={signup}>
        {' '}
        Enter{' '}
      </button>
      <div className="text-bot">
        <span className="link-primary" onClick={phoneSignUp}>
          Didn't receive a code?
        </span>
      </div>
    </div>
  );
}

export default Verify;
