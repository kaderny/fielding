import React from "react";
import "./Landing.scss";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { init } from "ityped";
import SvgMiniPilates from "../../svgs/MiniPilates";
import SvgFacebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instagram";
import SvgNewMessage from "../../svgs/NewMessage";
import SvgTwitter from "../../svgs/Twitter";
import SvgYoutube from "../../svgs/Youtube";

export default function Landing() {
  //i typedto show  different text
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 70,
      // showCursor: true,
      strings: ["PILATES", "WELLNESS", "CAREER", "YOGA"],
    });
  }, []);
  //***************************END TEXTREF */

  //HANDLE FORM EMAIL TO MONGO DB
  const [form, setForm] = useState({
    email: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:1212/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ email: "" });
    navigate("/");
  }

  return (
    <div className="landing" id="landing">
      <div className="left">
        <div className="wrapper">
          <h1>
            START YOUR <span className="blue" ref={textRef}></span>
          </h1>
          <h2>
            WITH <span className="blue">KIMBERLY FIELDING </span> OVER{" "}
            <span className="blue">25</span> YEARS OF EXPERIENCE.
          </h2>

          <h3>
            Your back hurts ? I'm based in <span className="blue">NYC</span> ,
            and I got your back
          </h3>

          <form onSubmit={onSubmit}>
            <div className="buttonInput">
              <input
                type="text"
                name="email"
                id="email"
                placeholder=" Type your em@il address"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />

              <button className="buttonJoin" type="submit">
                JOiN
              </button>
            </div>
          </form>

          <div className="iconsWrap">
            <div className="connect">
              <h3>Let's connect:</h3>
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
