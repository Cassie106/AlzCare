import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import React, { useState } from 'react';
import './phoneSignUp.css';

import CountryPhoneInput, {
  CountryPhoneInputValue,
  ConfigProvider,
} from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

export default function (props) {
  const verify = () => {
    window.location.href = '/Verify';
  };
  let [authMode, setAuthMode] = useState('signup');
  const changeAuthMode = () => {
    window.location.href = '/signin';
  };

  if (authMode === 'signup') {
    return (
      <div classname="phoneSignUp">
        <ConfigProvider locale={en}>
          <h1>Enter your phone number</h1>
          <h4> Country Code</h4>
          <h4> Phone Number</h4>
          <CountryPhoneInput inline defaultValue={{ SHORT: 'US' }} />
          <h4>
            We'll send you a code to verify your phone number. Standard rates
            apply.
          </h4>
          <h4> Already have account? </h4>
          <span className="link-primary" onClick={changeAuthMode}>
            Sign In
          </span>
          <button className="button" onClick={verify}>
            {' '}
            Enter{' '}
          </button>
        </ConfigProvider>
      </div>
    );
  }
}

// export default PhoneSignUp;
