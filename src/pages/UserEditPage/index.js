import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
function UserEdit() {
  const navigate = useNavigate();

  return (
    <div class="container mx-auto my-5" style={{ maxWidth: "700px;" }}>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Edit User</h1>
      </div>
      <div class="card mb-2 p-4">
        <form>
          <div class="mb-3">
            <div class="row">
              <div class="col">
                <label for="name" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="col">
                <label for="email" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="email" />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="role" class="form-label">
              Role
            </label>
            <select class="form-control" id="role">
              <option value="">Select an option</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="d-grid">
            <Button
              color="blue"
              onClick={() => {
                navigate("/");
              }}
            >
              Update
            </Button>
          </div>
        </form>
      </div>
      <div class="text-center">
        <Link to="/user-manage">
          <i class="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}

export default UserEdit;
