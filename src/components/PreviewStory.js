function PreviewStory({ setShowPopup, username, storyUrl }) {
  console.log(storyUrl);

  return (
    <section style={styles.popupContainer}>
      <div
        onClick={() => {
          setShowPopup(false);
        }}
        style={styles.backdrop}
      ></div>
      <main
        style={{
          ...styles.popupBody,
          backgroundImage: `url(${storyUrl})`,
        }}
      >
        <span style={styles.username}>{username}</span>
      </main>
    </section>
  );
}

const styles = {
  username: {
    color: "white",
    display: "block",
    margin: ".5rem",
  },
  popupContainer: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    backgroundColor: "black",
    opacity: ".3",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    zIndex: "10",
  },
  popupBody: {
    position: "relative",
    zIndex: "20",
    backgroundColor: "white",
    width: "300px",
    height: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

export default PreviewStory;
