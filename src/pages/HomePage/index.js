import PostCard from "../../components/post-card";
import AccountQuery from "../../components/acc-query";

function Home() {
  return (
    <div class="container mx-auto my-5" style={{ maxWidth: "500px;" }}>
      <h1 class="h1 mb-4 text-center">My Blog</h1>
      <PostCard />
      <PostCard />
      <PostCard />
      <AccountQuery />
    </div>
  );
}

export default Home;
