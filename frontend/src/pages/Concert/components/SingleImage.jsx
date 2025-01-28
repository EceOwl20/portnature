import React from 'react'

const SingleImage = ({image}) => {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <img src={image.firebaseUrl} alt='concert' className='w-[70%] h-auto'/>
    </div>
  )
}

export default SingleImage 
