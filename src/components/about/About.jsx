import React from "react";
// import { motion } from "framer-motion";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
} from "framer-motion/dist/framer-motion";

import "./About.scss";
import myVideo from "../../svgs/kim.mp4";
import SvgCert1 from "../../svgs/aboutSvg/Cert1";
import SvgCert2 from "../../svgs/aboutSvg/Cert2";
import SvgCert3 from "../../svgs/aboutSvg/Cert3";
import SvgCert4 from "../../svgs/aboutSvg/Cert4";
import SvgCert5 from "../../svgs/aboutSvg/Cert5";
import SvgCert6 from "../../svgs/aboutSvg/Cert6";
import SvgCert7 from "../../svgs/aboutSvg/Cert7";
import SvgCert8 from "../../svgs/aboutSvg/Cert8";
import PageHeadings from "../PageHeadings/PageHeadings";
import YoutubeVideo from "../YoutubeVideo";
function About() {
  return (
    <div className="about" id="about">
      <PageHeadings name="ABOUT" />
      <div className="wrapperAbout">
        <p className="aboutP">
          Hello, i have been in the fitness industry for 25 years and have been
          teaching Pilates for over 10 of those years. i received my B.A. in
          Psychology and did a Master’s program at Springfield College in Health
          Promotion/ Wellness Management with advanced study in Counseling. i
          was a teacher in the Mind Body Fitness training program with other
          faculty members including Lesley Powell, Doris Pasteleur-Hall and Dr.
          Martha Eddy at Movements Afoot. i taught the Pilates repertoire and
          question & answer program to go along with the Physical Mind
          Institute, The Method Pilates certificate
        </p>
        <div className="VidKimi">
          <YoutubeVideo videoId="C60r6bCcZN0" />
        </div>
      </div>
      <div className="aboutsvgs">
        <SvgCert1 className="svg1" />
        <SvgCert2 className="svg1" />
        <SvgCert3 className="svg1" />
        <SvgCert4 className="svg1" />
        <SvgCert5 className="svg1" />
        <SvgCert6 className="svg1" />
        <SvgCert7 className="svg1" />
        <SvgCert8 className="svg1" />
      </div>
    </div>
  );
}

export default About;
