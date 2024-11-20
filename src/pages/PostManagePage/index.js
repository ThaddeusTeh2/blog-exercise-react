import { Link, useNavigate } from "react-router-dom";
import PostManageChildren from "../../components/p-manage";
import Button from "../../components/button";
function PostManage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px;" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Posts</h1>
        <div className="text-end">
          <Button
            color="blue"
            onClick={() => {
              navigate("/post-add");
            }}
          >
            Add New Post
          </Button>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" style={{ width: "40%;" }}>
                Title
              </th>
              <th scope="col">Status</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <PostManageChildren title="Post 1" status="Approved" />
            <PostManageChildren title="Post 2" status="Approved" />
            <PostManageChildren title="Post 3" status="Pending" />
            <PostManageChildren title="Post 4" status="Approved" />
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

export default PostManage;
