import React from "react";

function Separator() {
  const randomNumber1 = Math.floor(Math.random() * 9); // Random number between 40 and 60
  const randomNumber2 = Math.floor(Math.random() * 9); // Another random number between 40 and 60

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1"
      viewBox="0 0 800 15"
      xmlSpace="preserve"
    >
      <path
        fill="#FFF"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="4"
        d={`M0 ${randomNumber1}L800 ${randomNumber2}`}
        imageRendering="pixelated"
        shapeRendering="crispEdges"
      ></path>
    </svg>
  );
}

export default Separator;