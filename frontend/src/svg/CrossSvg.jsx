import React from 'react'

const CrossSvg = ({className,width,height}) => {
  return (
    <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
  <path d="M18 6L6 18" stroke="#233038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6 6L18 18" stroke="#233038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  )
}

export default CrossSvg
