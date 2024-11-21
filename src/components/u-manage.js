import Badge from "./badge";
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
        <Badge color="yellow">{role}</Badge>{" "}
      </td>
      <td className="text-end">
        <div className="buttons d-flex justify-content-end gap-1">
          <Button
            color="green"
            onClick={() => {
              navigate("/user-edit");
            }}
          >
            <i className="bi bi-pencil"></i>
          </Button>
          <Button
            color="yellow"
            onClick={() => {
              navigate("/change-pwd");
            }}
          >
            <i className="bi bi-key"></i>
          </Button>
          <Button
            color="red"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default UserManageChildren;
