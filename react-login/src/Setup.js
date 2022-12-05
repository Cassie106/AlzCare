import './Setup.css';
import girlnboy from './GirlNBoy.png';

function Setup() {
  const activity = () => {
    window.location.href = './ActivityList';
  };
  return (
    <div className="Pet">
      <div className="title-wel">Welcome</div>
      <img src={girlnboy} className="img-girlnboy" alt="2" />
      <button className="button-n" onClick={activity}>
        {' '}
        Set up iPad{' '}
      </button>
    </div>
  );
}

export default Setup;
