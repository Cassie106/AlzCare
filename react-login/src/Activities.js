import './Activities.css';

function Activities() {
  return (
    <div className="Pet">
      <h1>? </h1>
      <input
        type="checkbox"
        class="btn-check"
        id="btn-check-outlined"
        autocomplete="off"
      />

      <label class="btn btn-outline-primary" for="btn-check-outlined"></label>
      <h3>Dog</h3>

      <label class="btn btn-outline-primary" for="btn-check-outlined"></label>
      <h3>Cat</h3>
    </div>
  );
}

export default Activities;
