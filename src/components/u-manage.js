import Button from "./button";
import { Link, useNavigate } from "react-router-dom";

function UserManageChildren() {
  const navigate = useNavigate();

  return (
    <tr>
      <th scope="row">3</th>
      <td>Jack</td>
      <td>jack@gmail.com</td>
      <td>
        <span class="badge bg-success">User</span>
      </td>
      <td class="text-end">
        <div class="buttons d-flex justify-content-end gap-1">
          <Button
            color="green"
            onClick={() => {
              navigate("/user-edit");
            }}
          >
            <i class="bi bi-pencil"></i>
          </Button>
          <Button
            color="yellow"
            onClick={() => {
              navigate("/change-pwd");
            }}
          >
            <i class="bi bi-key"></i>
          </Button>
          <Button
            color="red"
            onClick={() => {
              navigate("/");
            }}
          >
            <i class="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default UserManageChildren;
