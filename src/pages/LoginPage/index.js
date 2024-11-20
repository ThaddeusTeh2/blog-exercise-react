import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/button";
function Login() {
  const navigate = useNavigate();

  return (
    <div class="container my-5 mx-auto" style={{ maxWidth: "500px;" }}>
      <h1 class="h1 mb-4 text-center">Login</h1>

      <div class="card p-4">
        <form method="GET" action="/dashboard">
          <div class="mb-2">
            <label for="email" class="visually-hidden">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div class="mb-2">
            <label for="password" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="d-grid">
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
    </div>
  );
}

export default Login;
