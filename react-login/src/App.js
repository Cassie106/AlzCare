import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import OnBoarding from './OnBoarding';
import OnBoarding2 from './OnBoarding2';
import Signup from './Signup';
import Role from './role';
import PhoneSignUp from './phoneSignUp';
import Verify from './Verify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/onboarding2" element={<OnBoarding2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/role" element={<Role />} />
        <Route path="/phoneSignUp" element={<PhoneSignUp />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
