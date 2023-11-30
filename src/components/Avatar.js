import { useState } from "react";
import PreviewStory from "./PreviewStory";

function Avatar({ url, username, storyUrl, isOpened }) {
  const [showPopup, setShowPopup] = useState(false);

  const renderPopup = () => {
    if (showPopup) {
      return (
        <PreviewStory
          username={username}
          storyUrl={storyUrl}
          setShowPopup={setShowPopup}
        />
      );
    } else {
      return null;
    }
  };

  const onChangePopupState = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <div style={styles.avatarContainer} onClick={onChangePopupState}>
        <div
          style={{
            ...styles.avatarImg,
            backgroundImage: `url(${url})`,
            ...(isOpened ? {} : styles.activeAvatar),
          }}
        ></div>
        <span
          style={{
            ...styles.username,
            ...(isOpened ? {} : styles.activeUsername),
          }}
        >
          {username}
        </span>
      </div>
      {renderPopup()}
    </div>
  );
}

const styles = {
  avatarContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    marginRight: "1rem",
    cursor: "pointer",
  },
  avatarImg: {
    width: "60px",
    height: "60px",
    borderRadius: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "2px solid white",
  },
  activeAvatar: {
    outline: "2px solid #ff7070",
  },
  activeUsername: {
    color: "black",
  },
  username: {
    fontSize: ".8rem",
    marginTop: ".4rem",
    color: "gray",
  },
};

export default Avatar;
