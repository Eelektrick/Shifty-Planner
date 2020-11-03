import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Wrapper from "./components/Wrapper";
import Example from "./pages/Example";
import Scheduler from "./pages/Scheduler";
import HomePage from "./pages/HomePage";
import License from "./pages/License";
import Footer from "./components/Footer";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/example" component={Example} />
        <ProtectedRoute exact path="/scheduler" component={Scheduler} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        <ProtectedRoute exact path="/license" component={License} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
