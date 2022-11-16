import dog from './dog.png';
import cat from './cat.png';
import './pet.css';

function Pet() {
  return (
    <div className="Pet">
      <h1>Choose a pet to accompany Christina through out the game? </h1>
      <input
        type="checkbox"
        class="btn-check"
        id="btn-check-outlined"
        autocomplete="off"
      />

      <label class="btn btn-outline-primary" for="btn-check-outlined">
        <img src={dog} alt="2" />
      </label>
      <h3>Dog</h3>

      <label class="btn btn-outline-primary" for="btn-check-outlined">
        <img src={cat} alt="2" />
      </label>
      <h3>Cat</h3>
    </div>
  );
}

export default Pet;
