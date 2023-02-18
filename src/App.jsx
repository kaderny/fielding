import React from "react";
import "./App.scss";
// import { useState, useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Testimonials from "./components/testimonials/Testimonials";
import Packages from "./components/cpackages/Packages";
import Inspiration from "./components/inspiration/Inspiration";
import Footer from "./components/footer/footer";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
function App() {
  //adding a loader here
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);

  return (
    <div className="app">
      {/* loading ?
      <ClipLoader color={"#234BD1"} loading={loading} size={50} />
      : */}
      <Navbar />
      <div className="sections">
        <Landing />
        <Routes>
          <Route path="/create" element={<Landing />} />
        </Routes>
        <About />
        <Classes />
        <Testimonials />
        <Packages />
        <Inspiration />
        <Footer />
      </div>
    </div>
  );
}

export default App;
