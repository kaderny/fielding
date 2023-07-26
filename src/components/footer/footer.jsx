import React from "react";
import "./footer.scss";
function footer() {
  return (
    <div className="footer">
      <div className="logoo">
        <img
          className="logo"
          src="assets/images/kimiBLUE.png"
          width="50px"
          alt="kimilogo"
        />
        {/* <g
          class="png"
          style="display: block;"
          transform="matrix(1,0,0,1,46.189918518066406,37.75)"
          opacity="1"
        >
          <image
            width="45px"
            height="45px"
            preserveAspectRatio="xMidYMid slice"
            xlink:href="assets/images/kimiBLUE.png"
          ></image>
        </g> */}

        <p>copyright {new Date().getFullYear()}</p>
        <div className="phone">
          <a href="tel:9292838474"> Call me Today : 9292-283-8474 </a>
        </div>
      </div>
      {/* console.log {date}; */}
    </div>
  );
}

export default footer;
