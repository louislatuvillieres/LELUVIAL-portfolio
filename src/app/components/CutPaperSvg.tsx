import React from 'react';

const CutPaperSVG = () => {
  // Adjust the points array to create the desired cut-paper effect
  const points = [
    '100,100',
    '100,0',
    '100,100',
    '70,70',
    '30,70',
    '0,100',
  ];

  const pointsString = points.join(' ');

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      style={{ position: 'absolute', bottom: 0, left: 0 }}
    >
      <polygon points={pointsString} fill="#000" />
    </svg>
  );
};

export default CutPaperSVG;