import './Category.css';

function Category() {
  const setup = () => {
    window.location.href = '/Setup';
  };
  return (
    <div className="Category">
      <div className="title">
        <p>Choose Christina's top area of interest? </p>
      </div>
      <div className="interest">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-primary">
            Music
          </button>
          <button type="button" class="btn btn-outline-primary">
            Art
          </button>
          <button type="button" class="btn btn-outline-primary">
            Math
          </button>

          <button type="button" class="btn btn-outline-primary">
            Sports
          </button>
          <button type="button" class="btn btn-outline-primary">
            Science
          </button>
          <button type="button" class="btn btn-outline-primary">
            Cook
          </button>

          <button type="button" class="btn btn-outline-primary">
            Read
          </button>
          <button type="button" class="btn btn-outline-primary">
            Cartoon
          </button>
          <button type="button" class="btn btn-outline-primary">
            Puzzle
          </button>
        </div>
      </div>

      <button className="button-next" onClick={setup}>
        {' '}
        Next{' '}
      </button>
    </div>
  );
}

export default Category;
