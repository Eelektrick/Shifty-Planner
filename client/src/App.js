import React from "react";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Scheduler from "./pages/Scheduler";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        {/* <Gallery /> */}
         <Scheduler /> 
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
