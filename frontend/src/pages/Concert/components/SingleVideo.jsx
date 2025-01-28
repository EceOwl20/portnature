import React from 'react'

const SingleVideo = ({videoLink}) => {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
     <iframe 
     width="1000" 
     height="640" 
     
              src={videoLink}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            
    </div>
  )
}

export default SingleVideo
