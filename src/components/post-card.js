import { useNavigate } from "react-router-dom";
import Button from "./button";

function PostCard(props) {
  const navigate = useNavigate();

  const { title, desc } = props;

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <div className="text-end">
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
