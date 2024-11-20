import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function PostAdd() {
  const navigate = useNavigate();

  return (
    <div class="container mx-auto my-5" style={{ maxWidth: "700px;" }}>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h1 class="h1">Add New Post</h1>
      </div>
      <div class="card mb-2 p-4">
        <form>
          <div class="mb-3">
            <label for="post-title" class="form-label">
              Title
            </label>
            <input type="text" class="form-control" id="post-title" />
          </div>
          <div class="mb-3">
            <label for="post-content" class="form-label">
              Content
            </label>
            <textarea
              class="form-control"
              id="post-content"
              rows="10"
            ></textarea>
          </div>
          <div class="text-end">
            <Button
              color="blue"
              onClick={() => {
                navigate("/post-add");
              }}
            >
              Add New Post
            </Button>
          </div>
        </form>
      </div>
      <div class="text-center">
        <Link to="/post-manage">
          <i class="bi bi-arrow-left"></i> Back
        </Link>
      </div>
    </div>
  );
}

export default PostAdd;
