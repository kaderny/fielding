import "./Landing.scss";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router";
import { init } from "ityped";
import SvgMiniPilates from "../../svgs/MiniPilates";
import SvgFacebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instagram";
import SvgNewMessage from "../../svgs/NewMessage";
import SvgTwitter from "../../svgs/Twitter";
import SvgYoutube from "../../svgs/Youtube";
// import axios from "axios";

export default function Landing() {
  //mailchimp
  // const mailchimp = require("@mailchimp/mailchimp_marketing");

  // mailchimp.setConfig({
  //   apiKey: "c0bad8a2d632c532e4e9cc91ca04eca6-us10",
  //   server: "us10",
  // });

  // async function run() {
  //   const response = await mailchimp.ping.get();
  //   console.log(response);
  // }

  // run();

  //i typedto show  different text
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 70,
      // showCursor: true,
      strings: ["Pilates", "Wellness", "Carrer", "Yoga"],
    });
  }, []);
  //***************************END TEXTREF */

  //HANDLE FORM EMAIL TO MONGO DB
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    fetch("http://192.168.1.214:3001/api/submit-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setError("");
        } else {
          throw new Error("Email already suscribed ");
        }
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message || "An error occurred");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="landing" id="landing">
      <div className="left">
        <div className="wrapperLeft">
          <h1>
            Start Your <span className="blue" ref={textRef}></span>
          </h1>
          <h2>
            With <span className="blue">Kimberly Fielding </span> Over{" "}
            <span className="blue">25</span> Years Of Experience.
          </h2>

          <h3>
            I'm based in <span className="blue">NYC</span> , join now to learn
            more about my services
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="buttonInput">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" Type your em@il address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                className="buttonJoin"
                type="submit"
                disabled={submitting}
              >
                JOiN
              </button>
              <div>
                {success && (
                  <p style={{ color: "green" }}>
                    Horay! check your email for exclusive offer.
                  </p>
                )}
                {error && (
                  <p style={{ color: "red" }} className="error">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </form>

          <div className="iconsWrap">
            <div className="connect">
              <h2>Let's connect:</h2>
            </div>
            <div className="iconsContainer">
              <a
                href="mailto:kaderbrklyn@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgNewMessage className="icon" />
              </a>

              <a
                href="https://www.facebook.com/kimfieldingpilates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgFacebook className="icon" />
              </a>
              <a
                href="https://www.instagram.com/kimfieldingpilates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="icon" />
              </a>
              <a
                href="https://twitter.com/kimfpilates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgTwitter className="icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjCFXTP-mwxzPYbmQRHuIvg/playlists"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgYoutube className="icon" />
              </a>
            </div>
          </div>
          <div className="phone">
            <a href="tel:9292838474"> Call me Today : 929-283-8474 </a>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="svgContainer">
          <SvgMiniPilates className="svgwom" />
        </div>
      </div>
    </div>
  );
}
