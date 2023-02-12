import React from "react";
import "./footer.scss";
function footer() {
  return (
    <div className="footer">
      <a href="/landing">
        <img src="assets/images/kimiBLUE.png" width="50px" alt="kimilogo" />
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
      </a>
      <p>copyright {new Date().getFullYear()}</p>
      {/* console.log {date}; */}
    </div>
  );
}

export default footer;
