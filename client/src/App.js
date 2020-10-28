import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";
import Example from "./pages/Gallery";
import Scheduler from "./pages/Scheduler";

function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Wrapper>

          <Route  exact path="/" component={Login} />
          <Route  exact path="/example" component={Example} />
          <Route  exact path="/scheduler" component={Scheduler} />
          {/* <Gallery /> */}
         {/* <Scheduler />  */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;