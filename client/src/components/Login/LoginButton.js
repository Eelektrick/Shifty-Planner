import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="button" onClick={() => loginWithRedirect()}>
      <span>Log in</span>
    </button>
  );
};

export default LoginButton;
