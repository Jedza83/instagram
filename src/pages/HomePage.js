import Stories from "./../components/Stories";
import Posts from "./../components/Posts";

function HomePage({ user }) {
  return (
    <div>
      <Stories />
      <Posts />
    </div>
  );
}
export default HomePage;
