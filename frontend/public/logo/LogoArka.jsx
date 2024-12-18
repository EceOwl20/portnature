import React from "react";

function LogoArka({ className, color, width, height }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "1920"}
        height={height || "96"}
        viewBox="0 0 1920 96"
        fill="none"
      >
        <path
          d="M0 0H1920V96H0V0Z"
          fill={color || "black"}
        />
      </svg>
    </div>
  );
}

export default LogoArka;
