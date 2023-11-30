import posts from "./../resources/posts";
import Post from "./../components/Post";

function Posts() {
  return (
    <div>
      {posts.map((singlePost) => {
        return <Post post={singlePost} key={singlePost.username} />;
      })}
    </div>
  );
}

export default Posts;
