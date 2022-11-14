import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import './Verify.css';

const CORRECT_PIN_CODE = '151022';

function Verify() {
  const signup = () => {
    window.location.href = './Signup';
  };

  return (
    <div className="Verify">
      <h1>Enter the 6-digit verification code</h1>
      <ReactCodeInput type="number" fields={6} />
      <button className="Button" onClick={signup}>
        {' '}
        Enter{' '}
      </button>
      <h4>Didn't receive a code?</h4>
    </div>
  );
}

export default Verify;
