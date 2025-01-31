import React from 'react'
import AquaparkSvg from '../../../svg/AquaparkSvg'

const AquaParkSection2 = ({images=[],header,text,span, videoLink}) => {
  return (
    <div className='flex flex-col max-w-[1880px] max-h-[4745px] w-screen justify-center items-center gap-10 lg:gap-28 mt-12'>
        <h3 className='flex font-lora text-[40px] font-normal'>
          {header}
        </h3>
        
        {/* Sonsuz akış efekti */}
        <div className="w-full overflow-x-hidden relative" style={{height: '680px'}}> 
          <div className="track overflow-x-hidden flex flex-row flex-nowrap gap-32 h-full items-center animate-marquee">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src={images[0].firebaseUrl}
                    alt={images[0].altText} 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                     loading="lazy"
                  />
                </div>

                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src={images[1].firebaseUrl}
                    alt={images[1].altText}
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                     loading="lazy"
                  />
                </div>

                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src={images[1].firebaseUrl}
                    alt={images[1].altText} 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                     loading="lazy"
                  />
                </div>

                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src={images[1].firebaseUrl}
                    alt={images[1].altText} 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                     loading="lazy"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='flex flex-row items-center gap-10 justify-center text-start w-[80%]'>
            <AquaparkSvg width={45} height={49} />
            <p className='flex font-monserrat text-black font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[22px] lg:leading-[30px] w-[95%]'>
                {text}
            </p>
        </div>

        <div className='w-full flex items-center justify-center gap-10 mx-auto '>
          <div className='flex flex-col gap-8 relative w-full lg:w-[800px]'>
            <iframe 
            className=' w-full h-auto min-h-[370px] lg:w-[800px] flex '
              width="800" 
              height="450" 
              src={videoLink}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            <p className='flex font-monserrat text-[20px] font-bold leading-7 items-center justify-center'>
            {span}
            </p>
          </div>
        </div>
        <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: 200%; 
          animation: marquee 50s linear infinite;
        }
      `}</style>
      </div>

      
  )
}

export default AquaParkSection2