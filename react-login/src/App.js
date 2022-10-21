import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import OnBoarding from './OnBoarding';
import OnBoarding2 from './OnBoarding2';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/onboarding2" element={<OnBoarding2 />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
