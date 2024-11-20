import { useNavigate } from "react-router-dom";
import Button from "./button";

function PostCard() {
  const navigate = useNavigate();

  return (
    <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">Post</h5>
        <p class="card-text">Here's some content about the post</p>
        <div class="text-end">
          <Button
            color="blue"
            onClick={() => {
              navigate("/post");
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
