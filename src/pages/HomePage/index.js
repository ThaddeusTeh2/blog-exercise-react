import PostCard from "../../components/post-card";
import AccountQuery from "../../components/acc-query";

function Home() {
  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "500px;" }}>
      <h1 className="h1 mb-4 text-center">My Blog</h1>
      <PostCard title="Post 1" desc="Here's some content about post 1" />
      <PostCard title="Post 2" desc="Here's some content about post 2" />
      <PostCard title="Post 3" desc="Here's some content about post 3" />
      <AccountQuery />
    </div>
  );
}

export default Home;
