import React, { useState } from 'react';
import { DatePicker } from 'react-responsive-datepicker';
import 'react-responsive-datepicker/dist/index.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// import { DateSelect } from 'react-ymd-date-select/presets/mui';

export default function (props) {
  let [authMode, setAuthMode] = useState('signin');
  const [state, setstate, date] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isOpen, setIsOpen] = useState(false);

  const changeAuthMode = () => {
    // setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
    window.location.href = '/signup';
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
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Who is playing?</h3>
          <div className="text-center">
            Not registered yet?{' '}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nickname</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Nickname"
            />
          </div>
          <div className="form-group mt-3">
            <label>Birthday</label>
            {/* <DateSelect value={date} onChange={Date} />
            <p>Selected date: {date}</p> */}
            {/* <DateSelect value={date} onChange={setDate} />
            <p>{date}</p> */}
            <button
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
            />
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
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
