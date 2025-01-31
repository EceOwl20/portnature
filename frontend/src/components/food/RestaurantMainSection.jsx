import React,{ useEffect, useCallback, useState }  from "react";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LineVerticalSvg from "../../svg/LineVerticalSvg"
import LineVertical2Svg from "../../svg/LineVertical2Svg"

const RestaurantMainSection = ({images=[], header,text, span,videoLink}) => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align:"center",
    startIndex:0,
  }, [
    Autoplay({ delay: 3000 }),
  ]
);

  const [curr, setCurr] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    //setCurr(newIndex);
  }, [emblaApi, curr, images.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    //setCurr(newIndex);
  }, [emblaApi, curr, images.length]);

  const handleJump = useCallback(
    (index) => {
      if (emblaApi && emblaApi.scrollTo) emblaApi.scrollTo(index);
      setCurr(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurr(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);


  return (
    <div className='flex flex-col max-w-[1920px] mb-5 lg:mt-5 items-center justify-center w-screen'>
    <div className='flex flex-col lg:flex-row w-full gap-5 justify-center items-center lg:h-[30vh] xl:h-[46vh]'>
        <div className='flex w-full lg:w-1/2 h-full'>
            <div className="overflow-hidden relative w-full h-auto" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((img, index) => (
            <div className="flex-[0_0_auto] w-full flex justify-center relative group" key={index}>
              <div className="flex flex-col relative z-10 min-h-[360px]">
              <img
                className="cursor-pointer overflow-hidden object-cover relative  min-h-[360px]"
                height={img.height}
                width={img.width}
                src={img.firebaseUrl}
                alt={img.altText}
                 loading="lazy"
              />
              </div>
            </div>
          ))}
        </div>
    </div>
        </div>
        <div className='hidden lg:flex w-full h-full lg:w-1/2'>
            <iframe
                width="560"
                height="auto"
                src={videoLink}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className=' flex w-full min-h-content rounded-none'
                style={{ borderRadius: '0px', border: 'none' }}
            ></iframe>
        </div>
    </div>
    <div className='relative flex flex-col lg:flex-row w-[85%] lg:w-full items-center text-start justify-center my-24 gap-[15px]'>
        <h1 className='flex w-full lg:w-1/3 text-[28px] lg:text-[40px] font-lora font-medium leading-normal '>
            {header}
        </h1>

        <div className="flex lg:hidden w-[100%] ">
              <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
              <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
            </div>
        
        <div className="absolute -bottom-10 left-1/2 hidden lg:flex flex-col w-1/3 h-auto">
            <LineVerticalSvg width={1} height={90}/>
            <LineVertical2Svg width={1} height={90}/>
        </div>
        
        <p className='flex flex-col w-[100%] lg:w-1/3 font-normal font-monserrat text-[12px] lg:text-[15px] leading-6'>
        {text}
            <span className='mt-2 font-monserrat text-[15px] font-bold leading-6'>{span}</span>
        </p>

    </div>
    <div className='flex lg:hidden w-full h-auto '>
            <iframe
                src={videoLink}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className=' flex w-full min-h-[350px] object-cover rounded-none'
                style={{ borderRadius: '0px', border: 'none' }}
            ></iframe>
        </div>

    <div className='flex lg:hidden w-full h-full'>
            {/* <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/qs4HrhmnYK0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className='w-full min-h-[360px] md:min-h-[420px] rounded-none'
                style={{ borderRadius: '0px', border: 'none'}}
            ></iframe> */}
        </div>

</div>
   
  );
};

export default RestaurantMainSection;
