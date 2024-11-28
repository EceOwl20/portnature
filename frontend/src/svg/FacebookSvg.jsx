import React from 'react'

const FacebookSvg = ({className,width,height,color}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 38" fill="none">
  <g clipPath="url(#clip0_3843_5118)">
    <path d="M18.2509 19.044H12.5108V38.0041H4.03667V19.0662H0V12.3251H3.98895C3.98895 11.9706 3.97941 11.678 3.98895 11.39C4.07007 9.55068 3.95555 7.67594 4.28955 5.87655C4.93847 2.3664 7.70593 0.19915 11.5422 0.0484622C13.947 -0.0490419 16.3566 0.0307342 18.8282 0.0307342V6.53692C17.664 6.53692 16.4807 6.53692 15.2973 6.53692C12.8639 6.53692 12.506 6.86932 12.506 9.14293C12.506 10.1579 12.506 11.1684 12.506 12.2852H19.0048C18.7519 14.581 18.5085 16.766 18.2557 19.044H18.2509Z" fill={color}/>
  </g>
  <defs>
    <clipPath id="clip0_3843_5118">
      <rect width="19" height="38" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
  )
}

export default FacebookSvg
