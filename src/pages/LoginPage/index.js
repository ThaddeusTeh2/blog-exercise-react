import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/button";
function Login() {
  const navigate = useNavigate();

  return (
    <div className="container my-5 mx-auto" style={{ maxWidth: "500px" }}>
      <h1 className="h1 mb-4 text-center">Login</h1>

      <div className="card p-4">
        <form method="GET" action="/dashboard">
          <div className="mb-2">
            <label for="email" className="visually-hidden">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-2">
            <label for="password" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="d-grid">
            <Button
              color="blue"
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>

      {/* <!-- links --> */}
      <div className="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3">
        <Link to="/">
          <i className="bi bi-arrow-left"></i> Back
        </Link>
        <Link to="/signup">
          Dont have an Account? Sign Up Here{" "}
          <i className="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  );
}

export default Login;
