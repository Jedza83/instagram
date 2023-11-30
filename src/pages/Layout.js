import { Outlet } from "react-router-dom";
import Sidebar from "./../components/SideBar";

function Layout({ user }) {
  return (
    <div style={styles.layout}>
      {user && <Sidebar />}
      <Outlet />
    </div>
  );
}
export default Layout;

const styles = {
  layout: {
    display: "flex",
  },
};
