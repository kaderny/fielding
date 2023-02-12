import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="/landing">
              <img src="assets/images/kimiBLUE.png" alt="kimilogo" />
            </a>
          </div>
          <div className="p1">KIM FIELDING PILATES</div>
        </div>
        {/* <div className="p1">Kim Fielding Pilates</div> */}
        <div className="right">
          <ul className="navv">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#landing"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#classes">
                Classes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#packages">
                Packages
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#inspiration">
                Inspiration
              </a>
            </li>
            <li className="nav-item-signup">
              <a className="nav-link" href="/">
                Sign-UP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
