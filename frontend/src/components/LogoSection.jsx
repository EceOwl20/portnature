import React from 'react'

const LogoSection = ({images}) => {
  return (
    <div className='flex bg-[#F8F8F8] w-full items-center justify-center h-[22vh] my-10'>
      <div className='flex w-[90%] items-center justify-between overflow-x-auto'>
        
        {images.map((item,index)=>(
          <img src={item} alt='logo' width={item.width} height={item.height} />
        ))}
      </div>
    </div>
  )
}

export default LogoSection
