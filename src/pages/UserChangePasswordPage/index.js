import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";

function UserChangePwd() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px;" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Change Password</h1>
      </div>
      <div className="card mb-2 p-4">
        <form>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label for="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="col">
                <label for="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
            </div>
          </div>
          <div className="d-grid">
            <Button
              color="blue"
              onClick={() => {
                navigate("/");
              }}
            >
              Change Password
            </Button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/user-manage">
          <i className="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}

export default UserChangePwd;
