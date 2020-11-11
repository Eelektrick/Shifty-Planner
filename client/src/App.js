import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Example from "./pages/Example";
import Admin from "./pages/Admin";
import Scheduler from "./pages/Scheduler";
import HomePage from "./pages/HomePage";
import License from "./pages/License";
import Footer from "./components/Footer";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";
// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://shifty-planner.herokuapp.com/",
          scope: "create:schedule",
        });
        const decoded = jwt_decode(token);
        // console.log(decoded);
        const role = decoded["https://shifty-planner.com/roles"][0];
        setIsAdmin(role === "supervisor");
      } catch (e) {
        console.log(e);
      }
    })();
  }, [isAuthenticated]);
  return (
    <Router>
      <div>
        <Navbar isAdmin={isAdmin} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/example" component={Example} />
        <ProtectedRoute exact path="/admin" component={Admin} />
        <ProtectedRoute exact path="/scheduler" component={Scheduler} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        <ProtectedRoute exact path="/license" component={License} />
        <NotificationContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
