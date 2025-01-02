import React,{ useEffect, useCallback, useState }  from "react";
import image from "../../../public/images/alacarteMain.png";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LineVerticalSvg from "../../svg/LineVerticalSvg"
import LineVertical2Svg from "../../svg/LineVertical2Svg"

const images =[image,image,image]

const RestaurantMainSection = ({images=[], header,text, span, lang,videoLink}) => {
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
    <div className='flex flex-col max-w-[1920px] mx-3 my-5 items-center justify-center'>
    <div className='flex flex-col lg:flex-row w-full gap-5 justify-center items-center lg:h-[30vh] xl:h-[46vh]'>
        <div className='flex w-full lg:w-1/2 h-full'>
            {/* <img src='../../../../public/images/minialacarte/miniclubalacarte.png' alt='minialacarte' /> */}
            <div className="overflow-hidden relative w-full h-auto" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((img, index) => (
            <div className="flex-[0_0_auto] w-full flex justify-center relative group" key={index}>
              <div className="flex flex-col relative z-10">
              <img
                className="cursor-pointer overflow-hidden object-cover relative"
                height={img.height}
                width={img.width}
                src={img.firebaseUrl}
                alt={img.altText[lang]}
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
    <div className='relative flex flex-row w-full justify-center my-24'>
        <h1 className='flex w-1/3 justify-end text-[40px] font-lora font-medium leading-normal mr-32'>
            {header[lang]}
        </h1>
        
        <div className="absolute -bottom-10 left-1/2 flex flex-col w-1/3 h-auto">
            <LineVerticalSvg width={1} height={90}/>
            <LineVertical2Svg width={1} height={90}/>
        </div>
        
        <p className='flex flex-col w-1/3 font-normal font-monserrat text-[15px] leading-6'>
        {text[lang]}
            <span className='mt-2 font-monserrat text-[15px] font-bold leading-6'>{span[lang]}</span>
        </p>
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

    //   <section className="flex w-screen h-[70vh] relative items-start justify-between bg-white">
    //     <div className="flex flex-col w-full lg:w-[49%] items-center justify-center lg:gap-[20px] text-center lg:text-start ">
    //       <div className="overflow-hidden relative w-full h-auto" ref={emblaRef}>
    //     <div className="flex grid-flow-col">
    //       {images.map((img, index) => (
    //         <div className="flex-[0_0_auto] w-full flex justify-center relative group" key={index}>
    //           <div className="flex flex-col relative z-10">
    //           <img
    //             className="cursor-pointer overflow-hidden object-cover relative"
    //             height={img.height}
    //             width={img.width}
    //             src={img.firebaseUrl}
    //             alt={img.altText[lang]}
    //           />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    // </div>
          
    //       <div className="flex w-[80%] lg:w-[70%] items-center justify-end gap-[28px] mt-[43px] text-center">
    //        <h2 className="text-[40px] text-customGray font-lora leading-normal font-medium">{header[lang]}</h2>
    //       </div>
    //       <p className="flex lg:hidden text-[12px] w-[95%] text-black font-monserrat font-normal leading-normal">{text[lang]}</p>
    //     </div>

    //     <div className="hidden lg:flex flex-col w-[49%] items-center lg:items-center justify-center lg:gap-[20px] text-center lg:text-center">
    //     <img
    //         src={image.firebaseUrl}
    //         alt={image.altText[lang]}
    //         width={image.width}
    //         height={image.height}
    //       />
    //       <p className="text-[15px] w-[90%] lg:w-[65%] text-black font-monserrat font-normal leading-[22.5px] lg:mt-[43px]">
    //       {text[lang]}
    //       </p>
    //     </div>
      
    //   <div className="absolute -bottom-10 left-1/2 flex flex-col w-auto h-auto">
    //   <LineVerticalSvg width={1} height={120}/>
    //   <LineVertical2Svg width={1} height={120}/>
    //   </div>
    //   </section>
     
   
  );
};

export default RestaurantMainSection;
