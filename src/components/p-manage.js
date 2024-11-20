import Button from "./button";
import { Link, useNavigate } from "react-router-dom";

function PostManageChildren(props) {
  const navigate = useNavigate();

  const { index = 0, title = "Untitled", status = "Pending Review" } = props;
  const id = index + 1;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>
        <span className="badge bg-warning">{status}</span>
      </td>
      <td className="text-end">
        <div className="buttons d-flex justify-content-end gap-1">
          <Button
            color="blue"
            onClick={() => {
              navigate("/post");
            }}
          >
            <i className="bi bi-eye"></i>
          </Button>
          <Button
            color="yellow"
            onClick={() => {
              navigate("/post-edit");
            }}
          >
            <i className="bi bi-pencil"></i>
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

export default PostManageChildren;
