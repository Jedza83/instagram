import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

function Post({ post }) {
  return (
    <div className="postContainer">
      <PostHeader
        avatarImage={post.avatar}
        username={post.username}
        time={post.time}
      />
      <PostBody url={post.url} type={post.type} />
      <PostFooter
        likes={post.likes}
        username={post.username}
        description={post.description}
      />
    </div>
  );
}

export default Post;
