import React from "react";
import "./Landing.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import SvgMiniPilates from "../../svgs/MiniPilates";
import SvgFacebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instagram";
import SvgNewMessage from "../../svgs/NewMessage";
import SvgTwitter from "../../svgs/Twitter";
import SvgYoutube from "../../svgs/Youtube";

export default function Landing() {
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

          <div className="buttonInput">
            <input
              type="email"
              name="email"
              placeholder=" Type your em@il address"
            />

            <button className="buttonJoin" type="button">
              JOiN
            </button>
          </div>

          <div className="iconsWrap">
            <div className="connect">
              <h3>Let's connect:</h3>
            </div>
            <div className="iconsContainer">
              <a href="mailto:kaderbrklyn@outlook.com">
                <SvgNewMessage className="icon" />
              </a>

              <a href="https://www.facebook.com/kimfieldingpilates">
                <SvgFacebook className="icon" />
              </a>
              <a href="https://www.instagram.com/kimfieldingpilates/">
                <Instagram className="icon" />
              </a>
              <a href="https://twitter.com/kimfpilates">
                <SvgTwitter className="icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCjCFXTP-mwxzPYbmQRHuIvg/playlists">
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
