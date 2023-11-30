import stories from "./../resources/stories";
import Avatar from "./Avatar";

function Stories() {
  return (
    <div style={styles.storiesContainer}>
      {stories.map((story) => {
        return (
          <Avatar
            url={story.avatar}
            username={story.username}
            isOpened={story.isOpened}
            key={story.username}
            storyUrl={story.storyUrl}
          />
        );
      })}
    </div>
  );
}

const styles = {
  storiesContainer: {
    display: "flex",
    alignItems: "center",
  },
};

export default Stories;
