import dog from './dog.png';
import cat from './cat.png';
import './pet.css';

function Pet() {
  const interest = () => {
    window.location.href = './category';
  };
  return (
    <div className="Pet">
      <div className="title">
        <p>Choose a pet to accompany Christina through out the game? </p>
      </div>
      <div className="petOpt">
        <div
          class="btn btn-outline-primary"
          id="petOptions"
          for="btn-check-outlined"
        >
          <img src={dog} alt="2" />
        </div>
        <div
          class="btn btn-outline-primary"
          id="petOptions"
          for="btn-check-outlined"
        >
          <img src={cat} alt="2" />
        </div>
      </div>

      <button className="button-next" onClick={interest}>
        {' '}
        Next{' '}
      </button>
    </div>
  );
}

export default Pet;
