function PostBody({ url, type }) {
  if (type === "image") {
    return (
      <section className="postBody">
        <img src={url} />
      </section>
    );
  }
  if (type === "video") {
    return (
      <section className="postBody">
        <video
          style={{
            width: "100%",
          }}
          controls
        >
          <source src={url} type="video/mp4" />
        </video>
      </section>
    );
  }

  return (
    <p
      style={{
        backgroundColor: "#ff00002b",
        color: "red",
        padding: "1rem",
      }}
    >
      Error has occured!
    </p>
  );
}

export default PostBody;
