import React from 'react'

const ConcertImagesSection = ({images=[]}) => {
  return (
    <div className='flex w-screen gap-[30px] h-auto my-24 lg:my-10'>
  <div className='flex flex-col gap-[30px] items-end justify-end overflow-x-hidden w-[50%]'>
     <img src={images[0].firebaseUrl} alt='image1' className="h-auto lg:h-[358px] w-[67.5%]"/>
     <div className='flex justify-end items-start gap-[30px] overflow-hidden'>
     <img src={images[1].firebaseUrl} alt='image4' className="h-auto min-h-[180px] lg:h-[358px] w-[42%] object-cover "/>
     <img src={images[2].firebaseUrl} alt='image5' className="h-auto lg:h-[719px] w-[55%]"/>
     </div>
  </div>


  <div className='flex flex-col items-start justify-start gap-[30px]  w-[50%]'>
      <div className='flex justify-start items-end gap-[30px]'>
      <img src={images[3].firebaseUrl} alt='image2' className="h-auto lg:h-[537px] w-[65%]"/>
      <img src={images[4].firebaseUrl} alt='image3' className="h-auto min-h-[180px] lg:h-[358px] w-[34%] overflow-x-hidden object-cover"/>
      </div>
      <img src={images[5].firebaseUrl} alt='image6' className="h-auto lg:h-[358px] w-[76%]"/>
      </div>

    </div>
  )
}

export default ConcertImagesSection
