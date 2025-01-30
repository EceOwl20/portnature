import React from 'react'

const SingleImage = ({image}) => {
  return (
    <div className='flex w-full h-[35vh]  sm:h-[40vh] md:h-[48vh] lg:h-screen items-center justify-center mt-[3%] mb-[6%]'>
      <img src={image.firebaseUrl} alt='concert' className='w-[90%] lg:w-[70%] h-auto'/>
    </div>
  )
}

export default SingleImage 
