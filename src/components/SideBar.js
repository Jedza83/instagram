import logo from "../images/logo.png";
import sidebarItems from "../resources/sidebar-items";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebarContainer}>
      <img src={logo} style={styles.sidebarLogo} />

      {sidebarItems.map((item) => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={item.path}
            key={item.title}
          >
            <div style={styles.sidebarItem}>
              {item.icon}
              <span style={styles.sidebarTitle}>{item.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const styles = {
  sidebarContainer: {
    width: "240px",
    borderRight: "1px solid #e5e5e5",
    padding: "0px 1.5rem",
    marginRight: "1rem",
  },
  sidebarLogo: {
    width: "110px",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "1.2rem",
    color: "black",
  },
  sidebarTitle: {
    marginLeft: ".7rem",
  },
};

export default Sidebar;
