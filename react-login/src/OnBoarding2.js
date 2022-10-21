import img2 from './2.jpeg';
import './OnBoarding2.css';

function OnBoarding2() {
  const signUp = () => {
    window.location.href = '/Signup';
  };
  return (
    <div className="OnBoarding2">
      <h1>Welcome</h1>
      <img src={img2} alt="2" />
      <button className="button1"> Log In </button>
      <button className="button2" onClick={signUp}>
        {' '}
        Sign Up{' '}
      </button>
    </div>
  );
}

export default OnBoarding2;
