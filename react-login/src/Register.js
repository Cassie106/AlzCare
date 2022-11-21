import React, { useState } from 'react';
import { DatePicker } from 'react-responsive-datepicker';
import 'react-responsive-datepicker/dist/index.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pet from './pet';

// import { DateSelect } from 'react-ymd-date-select/presets/ymd';
// import { ChakraProvider } from '@chakra-ui/react';
// import { DateSelect } from 'react-ymd-date-select/presets/chakra-ui';

export default function (props) {
  let [authMode, setAuthMode] = useState('signin');
  const [state, setstate, date, setDate] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const changeAuthMode = () => {
    // setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
    window.location.href = '/signup';
  };

  const gotoPet = (e) => {
    e.preventDefault();
    window.location.href = '/pet';
    console.log('gotoPet');
  };

  const inputHendle = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const register = (e) => {
    const { username, email, password } = state;
    e.preventDefault();

    const formData = new FormData();

    // formData.append('username', username);
    // formData.append('email', email);
    // formData.append('password', password);
    // console.log('Hello', email, password, username);

    fetch('http://localhost:5000/api/v1/users/register', {
      method: 'POST',
      body: {
        username: username,
        email: email,
        password: password,
        setDate: date,
      },
      header: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // if (authMode === 'signin') {
  //   return (
  //     <div className="Auth-form-container">
  //       {/* <img src={logo} /> */}
  //       <form className="Auth-form">
  //         <div className="Auth-form-content">
  //           <h3 className="Auth-form-title">Sign In</h3>
  //           <div className="text-center">
  //             Not registered yet?{' '}
  //             <span className="link-primary" onClick={changeAuthMode}>
  //               Sign Up
  //             </span>
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Email address</label>
  //             <input
  //               type="email"
  //               className="form-control mt-1"
  //               placeholder="Enter email"
  //             />
  //           </div>
  //           <div className="form-group mt-3">
  //             <label>Password</label>
  //             <input
  //               type="password"
  //               className="form-control mt-1"
  //               placeholder="Enter password"
  //             />
  //           </div>
  //           <div className="d-grid gap-2 mt-3">
  //             <button type="submit" className="btn btn-primary">
  //               Submit
  //             </button>
  //           </div>
  //           <p className="text-center mt-2">
  //             Forgot <a href="#">password?</a>
  //           </p>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
  return (
    <div className="Auth-form-container">
      {/* <img src={logo} /> */}
      <form className="Auth-form" onSubmit={gotoPet}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Who is playing?</h3>
          {/* <div className="text-center">
            Not registered yet?{' '}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div> */}
          <div className="form-group mt-3">
            <label>Nickname</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Nickname"
            />
          </div>
          <div className="form-group mt-3">
            <label>Birthday </label>
            <select id="month" name="month">
              <option>month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <select id="day" name="day">
              <option>day</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>

            <select id="year" name="year">
              <option>year</option>
              <option value="1940">1940</option>
              <option value="1941">1941</option>
              <option value="1942">1942</option>
              <option value="1943">1943</option>
              <option value="1944">1944</option>
              <option value="1945">1945</option>
              <option value="1946">1946</option>
              <option value="1947">1947</option>
              <option value="1948">1948</option>
              <option value="1949">1949</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1977">1977</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
            </select>
            {/* <p>Selected date: {date}</p> */}

            {/* <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              Choose a date
            </button>
            <DatePicker
              isOpen={isOpen}
              onClose={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
              onChange={(e) => {
                e.preventDefault();
                console.log(e);
              }}
              defaultValue={new Date(1960, 5, 8)}
              minDate={new Date(1940, 1, 1)}
              maxDate={new Date(1990, 12, 31)}
              headerFormat="DD, MM dd"
            /> */}
          </div>

          <div className="form-group mt-3">
            <label>Gender</label>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel vaue="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Others"
                control={<Radio />}
                label="Others"
              />
            </RadioGroup>
          </div>

          <div className="d-grid gap-2 mt-3">
            {/* <button type="submit" className="btn btn-primary" onClick={Pet}> */}
            <button className="btn-next">Next</button>
          </div>
          {/* <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p> */}
        </div>
      </form>
    </div>
  );

  // return (
  //   <div className="Auth-form-container">
  //     <form className="Auth-form" onSubmit={register}>
  //       <div className="Auth-form-content">
  //         <h3 className="Auth-form-title">Sign Up</h3>
  //         <div className="text-center">
  //           Already registered?{' '}
  //           <span className="link-primary" onClick={changeAuthMode}>
  //             Sign In
  //           </span>
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Full Name</label>
  //           <input
  //             type="text"
  //             className="form-control mt-1"
  //             placeholder="e.g Jane Doe"
  //             onChange={inputHendle}
  //             name="username"
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Email address</label>
  //           <input
  //             type="email"
  //             className="form-control mt-1"
  //             placeholder="Email Address"
  //             onChange={inputHendle}
  //             name="email"
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             className="form-control mt-1"
  //             placeholder="Password"
  //             onChange={inputHendle}
  //             name="password"
  //           />
  //         </div>
  //         <div className="d-grid gap-2 mt-3">
  //           <button type="submit" className="btn btn-primary">
  //             Submit
  //           </button>
  //         </div>
  //         <p className="text-center mt-2">
  //           Forgot <a href="#">password?</a>
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  // );
}
