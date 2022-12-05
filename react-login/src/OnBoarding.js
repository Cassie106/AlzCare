import imgLogo from './1.png';
import Cafe from './CAFE.png';
import './OnBoarding.css';

function OnBoarding() {
  const nextPage = () => {
    window.location.href = '/onboarding2';
  };
  return (
    <div className="OnBoarding">
      <img src={Cafe} className="img-1" />
      <img src={imgLogo} className="img-2" alt="ElderlyCare" />
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
