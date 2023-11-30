import { AiOutlineEllipsis } from "react-icons/ai";

function PostHeader({ avatarImage, username, time }) {
  return (
    <section className="postHeader">
      <div className="userData">
        <div
          style={{
            backgroundImage: `url(${avatarImage})`,
          }}
          className="userAvatar"
        ></div>
        <strong>{username}</strong>
        <span>{time}</span>
      </div>

      <AiOutlineEllipsis size={35} className="icon" />
    </section>
  );
}

export default PostHeader;
