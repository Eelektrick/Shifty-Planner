import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaSignOutAlt } from "react-icons/fa";
import "../components/Navbar/style.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <a
      // href=" https://scheduling.auth0.com/v2/logout?returnTo=https://shifty-planner.herokuapp.com/&client_id=TaNNdVgbilHR0s6eTd3aT1Gi7jhXKa5Z"
      onClick={() => logoutWithRedirect()}
      style={{ color: "rgb(190, 147, 3)" }}
      className="nav-link"
    >
      <FaSignOutAlt />
      Log Out
    </a>
  );
};

export default LogoutButton;
