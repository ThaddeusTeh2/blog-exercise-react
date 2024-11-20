import Button from "./button";
import { Link, useNavigate } from "react-router-dom";

function UserManageChildren(props) {
  const navigate = useNavigate();

  const { index = 0, name = "n/a", email = "n/a", role = "user" } = props;
  const id = index + 1;

  return (
    <tr>
      <th scope="row">3</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <span class="badge bg-success">{role}</span>
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
