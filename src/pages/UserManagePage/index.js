import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import UserManageChildren from "../../components/u-manage";

function UserManage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Users</h1>
        <div className="text-end">
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
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <UserManageChildren
              name="John"
              email="john@gmail.com"
              role="user"
            />
            <UserManageChildren
              name="Jack"
              email="jack@gmail.com"
              role="editor"
            />
            <UserManageChildren
              name="Jane"
              email="jane@gmail.com"
              role="moderator"
            />
            <UserManageChildren
              name="Jill"
              email="jill@gmail.com"
              role="admin"
            />
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/dashboard">
          <i className="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}

export default UserManage;
