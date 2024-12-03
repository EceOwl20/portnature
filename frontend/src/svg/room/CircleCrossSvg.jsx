import React from 'react'

const CircleCrossSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 37 37" fill="none">
  <path d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z" stroke="#757575" strokeOpacity="0.998047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M24 13L13 24" stroke="#757575" strokeOpacity="0.998047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13 13L24 24" stroke="#757575" strokeOpacity="0.998047" strokeWidth="2" strokLinecap="round" strokLinejoin="round"/>
</svg>
    </div>
  )
}

export default CircleCrossSvg
