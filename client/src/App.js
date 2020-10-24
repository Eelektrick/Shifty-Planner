import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";
// import Scheduler from "./pages/Scheduler";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Login />
        {/* <Gallery /> */}
        {/* <Scheduler /> */}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
