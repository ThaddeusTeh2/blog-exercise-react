import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import UserManageChildren from "../../components/u-manage";

function UserManage() {
  const navigate = useNavigate();

  return (
    <div class="container mx-auto my-5" style={{ maxWidth: "700px;" }}>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Manage Users</h1>
        <div class="text-end">
          <Button
            color="blue"
            onClick={() => {
              navigate("/user-add");
            }}
          >
            Add New User
          </Button>
        </div>
      </div>
      <div class="card mb-2 p-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" class="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <UserManageChildren />
          </tbody>
        </table>
      </div>
      <div class="text-center">
        <Link to="/dashboard">
          <i class="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}

export default UserManage;
