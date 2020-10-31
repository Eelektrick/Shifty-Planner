import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Example from "./pages/Example";
import Scheduler from "./pages/Scheduler";
import HomePage from "./pages/HomePage";
import License from "./pages/License";
import Home from "./Home";
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
      </div>
    </Router>
  );
}

export default App;
