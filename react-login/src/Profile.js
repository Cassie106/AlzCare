import './Profile.css';
import { PageHeader } from 'antd';

function Profile() {
  const interest = () => {
    window.location.href = './category';
  };
  return (
    <div className="Profile">
      <div className="title">
        <p>Choose a pet to accompany Christina through out the game? </p>
      </div>
      <div className="petOpt">
        <div
          class="btn btn-outline-primary"
          id="petOptions"
          for="btn-check-outlined"
        >
          <img alt="2" />
        </div>
        <div
          class="btn btn-outline-primary"
          id="petOptions"
          for="btn-check-outlined"
        >
          <img alt="2" />
        </div>
      </div>

      <button className="button-next" onClick={interest}>
        {' '}
        Next{' '}
      </button>
    </div>
  );
}

export default Profile;
