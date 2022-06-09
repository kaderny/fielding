import React from "react";
import "./About.scss";
import SvgCert1 from "../../svgs/aboutSvg/Cert1";
import SvgCert2 from "../../svgs/aboutSvg/Cert2";
import SvgCert3 from "../../svgs/aboutSvg/Cert3";
import SvgCert4 from "../../svgs/aboutSvg/Cert4";
import SvgCert5 from "../../svgs/aboutSvg/Cert5";
import SvgCert6 from "../../svgs/aboutSvg/Cert6";
import SvgCert7 from "../../svgs/aboutSvg/Cert7";
import SvgCert8 from "../../svgs/aboutSvg/Cert8";

import PageHeadings from "../PageHeadings/PageHeadings";
function About() {
  return (
    <div className="about" id="about">
      <PageHeadings name="ABOUT" />
      <div className="wrapperAbout">
        {/* <img className="imgkimi" src="assets/images/kim2.jpg" alt="kimi" /> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          magnam error pariatur laudantium possimus rem cupiditate ipsam qui
          veniam dolor similique aut quia beatae blanditiis odio expedita velit
          labore id doloremque, molestiae consectetur facere voluptatum fuga
          perspiciatis! Voluptas, dignissimos atque asperiores minus ea reicien
          dis nihil, quaerat cumque nemo placeat delectus?
        </p>

        <div className="imgkimi">
          <img className="imgkimi1" src="assets/images/kimi4.png" alt="kimi" />
        </div>
      </div>
      <div className="aboutsvgs">
        <SvgCert1 className="svg1" />
        <SvgCert2 />
        <SvgCert3 />
        <SvgCert4 />
        <SvgCert5 />
        <SvgCert6 />
        <SvgCert7 />
        <SvgCert8 />
      </div>
    </div>
  );
}

export default About;
