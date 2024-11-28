import React from 'react'

const Cross2Svg = ({width,height,className}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
  <path d="M3.5 3.5L10.5001 10.5001" stroke="#3D515E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.5 10.5L10.5001 3.49992" stroke="#3D515E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  )
}

export default Cross2Svg
