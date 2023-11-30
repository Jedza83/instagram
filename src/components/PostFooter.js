import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineSend,
  AiOutlineBorder,
} from "react-icons/ai";
import { useState } from "react";

function PostFooter({ likes, username, description }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const renderLikeButton = () => {
    if (isLiked) {
      return (
        <AiFillHeart
          onClick={toggleLike}
          className="icon"
          color="red"
          size={30}
        />
      );
    } else {
      return <AiOutlineHeart onClick={toggleLike} className="icon" size={30} />;
    }
  };

  return (
    <section className="postFooter">
      <div className="postIcons">
        <div className="leftIcons">
          {renderLikeButton()}
          {/* {isLiked ? 'POST JE LAJOKVAN' : 'POST NIJE LAJOKVAN' } */}
          <AiOutlineComment className="icon" size={30} />
          <AiOutlineSend className="icon" size={30} />
        </div>
        <AiOutlineBorder size={30} />
      </div>
      <strong>{likes} likes</strong>
      <p className="postDescription">
        <strong>{username}</strong> {description}
      </p>
      <span className="seeTranslation">See translation</span>
      <div className="addComment">
        <span>Add comment...</span>
      </div>
    </section>
  );
}

export default PostFooter;
