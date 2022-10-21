import './Signup.css';

function Signup() {
  return (
    <div className="Signup">
      <h1>Create your caregiver account</h1>
      <div className="Signup-form-container">
        <form className="Signup-form">
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="FristName"
              className="form-control mt-1"
              placeholder="Enter First Name"
            />
            <input
              type="LastName"
              className="form-control mt-1"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
        </form>
      </div>

      <button className="button-signup"> Next </button>
    </div>
  );
}

export default Signup;
