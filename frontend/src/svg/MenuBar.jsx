import React from 'react'

const MenuBar = ({className,width,height}) => {
  return (
    <div className={className}>
     <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 14" fill="none">
  <path d="M1 7H15" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1 1H15" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1 13H15" stroke="#F8F8F8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
  )
}

export default MenuBar
