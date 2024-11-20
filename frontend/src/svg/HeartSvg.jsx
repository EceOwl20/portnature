import React from 'react'

const HeartSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33 28" fill="none">
  <g clipPath="url(#clip0_36_5086)">
    <path d="M16.46 27.98C31.27 18.93 32.92 12.78 32.92 8.23C32.92 3.69 29.24 0 24.69 0C20.14 0 16.46 3.68 16.46 8.23C16.46 3.69 12.78 0 8.23 0C3.68 0 0 3.68 0 8.23C0 12.78 1.65 18.93 16.46 27.98Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_36_5086">
      <rect width="32.92" height="27.98" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
  )
}

export default HeartSvg
