import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Login />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
