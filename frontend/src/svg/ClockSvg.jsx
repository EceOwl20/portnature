import React from 'react'

const ClockSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23 23" fill="none">
  <g clipPath="url(#clip0_3843_26283)">
    <path d="M11.5003 21.0837C16.7931 21.0837 21.0837 16.7931 21.0837 11.5003C21.0837 6.2076 16.7931 1.91699 11.5003 1.91699C6.2076 1.91699 1.91699 6.2076 1.91699 11.5003C1.91699 16.7931 6.2076 21.0837 11.5003 21.0837Z" stroke="#CFCFCF" strokeOpacity="0.998047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5 5.75V11.5L15.3333 13.4167" stroke="#CFCFCF" strokeOpacity="0.998047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_3843_26283">
      <rect width="23" height="23" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
  )
}

export default ClockSvg
