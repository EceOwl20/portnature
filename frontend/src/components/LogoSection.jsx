import React from 'react'

const LogoSection = ({images =[]}) => {
  return (
    <div className='flex bg-[#F8F8F8] w-full items-center justify-center h-[22vh] my-10'>
      <div className='flex w-[90%] items-center justify-between overflow-x-auto gap-16 xl:gap-[130px] h-full'>
        
        {images.map((item,index)=>(
          <img src={item.firebaseUrl} alt='logo' width={item.width} height={item.height} key={index} />
        ))}
      </div>
    </div>
  )
}

export default LogoSection
