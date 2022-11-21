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
        <div className="phone-form">
          <div className="title-num">
            <p>Enter your phone number</p>
          </div>
          <ConfigProvider locale={en}>
            <label> Country Code</label>
            <label> Phone Number</label>
            <CountryPhoneInput inline defaultValue={{ SHORT: 'US' }} />
            <div className="text-msg">
              We'll send you a code to verify your phone number. Standard rates
              apply.{' '}
            </div>
          </ConfigProvider>
        </div>
        <button className="button-enter" onClick={verify}>
          {' '}
          Enter{' '}
        </button>
        <div className="text-bot">
          Already have account?
          <span className="link-primary" onClick={changeAuthMode}>
            Sign In
          </span>
        </div>
      </div>
    );
  }
}

// export default PhoneSignUp;
