import React from "react";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Testimonials from "./components/testimonials/Testimonials";
import Packages from "./components/cpackages/Packages";
import Inspiration from "./components/inspiration/Inspiration";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Landing />
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
