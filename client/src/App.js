import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Login from "./components/Login";
import Example from "./pages/Gallery";
import Scheduler from "./pages/Scheduler";
import HomePage from "./pages/HomePage";
import Callback from './Callback';
import Home from './Home';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/example" component={Example} />
          <ProtectedRoute exact path="/scheduler" component={Scheduler} />
          <ProtectedRoute exact path="/home" component={HomePage} />
          {/* <Gallery /> */}
         {/* <Scheduler />  */}
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;