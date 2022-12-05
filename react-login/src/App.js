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
import Pet from './pet';
import ActivityList from './ActivityList';
import Category from './Category';
import NewSession from './NewSession';
import CreateSession from './CreateSession';
import Profile from './Profile';
import Session from './Session';
import Setup from './Setup';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './DragDrop';

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
        <Route path="/pet" element={<Pet />} />
        <Route path="/ActivityList" element={<ActivityList />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/newSession" element={<NewSession />} />
        <Route path="/CreateSession" element={<CreateSession />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/Setup" element={<Setup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
