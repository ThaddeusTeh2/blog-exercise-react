import { useNavigate } from "react-router-dom";
import Button from "./button";

function PostCard(props) {
  const navigate = useNavigate();

  const { title, desc } = props;

  return (
    <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
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
