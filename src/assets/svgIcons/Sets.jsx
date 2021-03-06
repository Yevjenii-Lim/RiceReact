import React from "react";

let SetsSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <g fill="none">
        <g transform="translate(14 2)">
          <ellipse
            cx="8.5"
            cy="5"
            stroke="#484848"
            strokeWidth="2"
            rx="8.5"
            ry="5"
          />
          <ellipse cx="8.5" cy="5" fill="#EE6344" rx="4.5" ry="2" />
          <path
            stroke="#484848"
            strokeWidth="2"
            d="M0 5v10c0 2.761 3.806 5 8.5 5s8.5-2.239 8.5-5V5"
          />
        </g>
        <path
          stroke="#484848"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.5 20l1.222 3.97a5 5 0 0 0 3.308 3.308l8.419 2.59a5 5 0 0 0 3.922-.42L25.5 26"
        />
        <path
          fill="#EE6344"
          d="M27.57 27.528C25.776 25.473 18.43 23.186 12.5 22 5 20.5-2.5 22 1 16.5c3.364-5.287 23.638-6.602 27.584 9.935.321 1.347-.625 1.538-1.014 1.093z"
        />
        <path
          stroke="#484848"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 13c-5.055 1.264-8.316 11.82-5.5 14.5m5 1.5c-2.366-5.336 2.517-13.28 6.5-14"
        />
      </g>
    </svg>
  );
};

export default SetsSvg;
