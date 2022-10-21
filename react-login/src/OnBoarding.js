import imgLogo from './1.jpeg';
import './OnBoarding.css';

function OnBoarding() {
  const nextPage = () => {
    window.location.href = '/onboarding2';
  };
  return (
    <div className="OnBoarding">
      <h1>AlzCare</h1>
      <img src={imgLogo} className="img-1" alt="ElderlyCare" />
      <div>
        <button className="startButton" onClick={nextPage}>
          {' '}
          Start{' '}
        </button>
      </div>
    </div>
  );
}

export default OnBoarding;
