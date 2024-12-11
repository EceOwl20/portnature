import React from 'react'
import AquaparkSvg from '../../../svg/AquaparkSvg'

const AquaParkSection2 = () => {
  return (
    <div className='flex flex-col max-w-[1880px] max-h-[4745px] mx-auto items-center gap-28'>
        <h3 className='flex font-lora text-[40px] font-normal'>
          Gallery
        </h3>
        
        {/* Sonsuz akış efekti */}
        <div className="w-full overflow-x-hidden relative" style={{height: '680px'}}> 
          <div className="track overflow-x-hidden flex flex-row flex-nowrap gap-32 h-full items-center animate-marquee">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src='../../../public/images/aquapark/AquaPark1.png' 
                    alt='Gallery Image 1' 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                  />
                </div>

                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src='../../../public/images/aquapark/AquaPark2.png' 
                    alt='Gallery Image 2' 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                  />
                </div>

                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src='../../../public/images/aquapark/AquaPark3.png' 
                    alt='Gallery Image 3' 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                  />
                </div>

                <div className='relative flex-none'>
                  <div className="absolute border border-dotted bottom-10 left-10 w-full h-full"></div>
                  <img 
                    src='../../../public/images/aquapark/AquaPark4.png' 
                    alt='Gallery Image 4' 
                    className='h-[600px] object-cover flex-shrink-0 relative z-10'
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='flex flex-row items-center gap-10 justify-center'>
            <AquaparkSvg width={45} height={49} />
            <p className='flex font-monserrat text-black font-bold text-[20px] leading-[30px] w-full'>
                One Aquapark with 6 slides for adults and <br/> a Children's Aquapark park with 12 slides for children.
            </p>
        </div>

        <div className='w-full flex items-center justify-center gap-10 mx-auto'>
          <div className='flex flex-col gap-8 relative' style={{width: '850px', height: '500px'}}>
            <iframe 
              width="800" 
              height="450" 
              src="https://www.youtube.com/embed/QAFojciW2kk" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            <p className='flex font-monserrat text-[20px] font-bold leading-7 items-center justify-center'>
                Because you deserve it!
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