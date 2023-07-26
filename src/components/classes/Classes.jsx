import React from "react";
import PageHeadings from "../PageHeadings/PageHeadings";
import SvgOffer1 from "../../svgs/offerSvg/Offer1";
import SvgOffer2 from "../../svgs/offerSvg/Offer2";
import SvgOffer3 from "../../svgs/offerSvg/Offer3";
import SvgOffer4 from "../../svgs/offerSvg/Offer4";
import "./Classes.scss";

function Classes() {
  return (
    <div className="classes" id="classes">
      <PageHeadings name="What We Offer?" />
      <h2>
        Pilates , Wellness , Movment , Rehabilliation , Teacher Training
        Certificate , Workshops , AND Continuing Education .
      </h2>
      <h3>
        In person , Virtual OR Hybrid with a holistic and integrated approarch.
      </h3>
      <div className="offersvg">
        <div className="heya" href="">
          <SvgOffer1 className="svgof" />
        </div>
        <div className="heya" href="">
          <SvgOffer2 className="svgof" />
        </div>
        <div className="heya" href="">
          <SvgOffer3 className="svgof" />
        </div>
        <div className="heya" href="">
          <SvgOffer4 className="svgof" />
        </div>
      </div>

      <p>SEE RESULTS IN 10 SESSIONS</p>
    </div>
  );
}

export default Classes;
