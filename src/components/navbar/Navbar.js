// import React from "react";
import "./Navbar.scss";
import { React, useEffect, useState } from "react";

function Navbar() {
  const handleClick = () => setisMobile(!isMobile);
  const [isMobile, setisMobile] = useState(false);

  // function toggleFunction() {
  //   var x = document.getElementById("navbar");
  //   x.classList.toggle("show");
  // }

  useEffect(() => {
    setisMobile(JSON.parse(window.localStorage.getItem("isMobile")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isMobile", isMobile);
  }, [isMobile]);

  return (
    <div className="navbar" id="navbar">
      <div className="left">
        <div className="logo">
          <a href="/landing">
            <img
              src="assets/images/kimiBLUE.png"
              alt="kimilogo"
              className="imgkimi"
            />
          </a>
        </div>
        <div className="p1">KIM FIELDING PILATES</div>
      </div>
      {/* <div className="p1">Kim Fielding Pilates</div> */}
      <div className="right">
        <ul
          className={isMobile ? "navLinksMobile" : "navLinksDesktop"}
          onClick={() => setisMobile(false)}
        >
          {/* <ul className="navv"> */}
          <li>
            <a aria-current="page" href="#landing">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#classes">Classes</a>
          </li>

          <li>
            <a href="#testimonials">Testimonials</a>
          </li>

          <li>
            <a href="#packages">Packages</a>
          </li>

          <li>
            <a href="#inspiration">Inspiration</a>
          </li>
          <li>
            <a href="/">Sign-UP</a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => handleClick()}>
          {/* //() => handleClick() */}
          <i className={isMobile ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
