import React from "react";

let RollsSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <g fill="none" transform="translate(6 4)">
      <ellipse
        cx="10"
        cy="6"
        stroke="#484848"
        stroke-width="2"
        rx="10"
        ry="6"
      />
      <ellipse cx="10" cy="6" fill="#EE6344" rx="6" ry="3" />
      <path
        stroke="#484848"
        stroke-width="2"
        d="M0 6v12c0 3.314 4.477 6 10 6s10-2.686 10-6V6"
      />
    </g>
  </svg>
  );
};

export default RollsSvg;
