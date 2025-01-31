import React, { useEffect, useCallback, useState } from "react";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PubBarMainSection = ({images=[], subImages=[], iconImage, header, text}) => {
  // 1. carousel için
  const [emblaRef1, emblaApi1] = useCarousel(
    { loop: true, align: "center", startIndex: 0 },
    [Autoplay({ delay: 3000 })]
  );

  // 2. carousel için
  const [emblaRef2, emblaApi2] = useCarousel(
    { loop: true, align: "center", startIndex: 0 },
    [Autoplay({ delay: 3000 })]
  );

  // Birinci carousel’deki slide index
  const [curr1, setCurr1] = useState(0);
  // İkinci carousel’deki slide index
  const [curr2, setCurr2] = useState(0);

  // Birinci carousel prev/next
  const scrollPrev1 = useCallback(() => {
    if (!emblaApi1) return;
    emblaApi1.scrollPrev();
    setCurr1((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [emblaApi1]);

  const scrollNext1 = useCallback(() => {
    if (!emblaApi1) return;
    emblaApi1.scrollNext();
    setCurr1((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [emblaApi1]);

  // İkinci carousel prev/next
  const scrollPrev2 = useCallback(() => {
    if (!emblaApi2) return;
    emblaApi2.scrollPrev();
    setCurr2((prev) => (prev === 0 ? subImages.length - 1 : prev - 1));
  }, [emblaApi2]);

  const scrollNext2 = useCallback(() => {
    if (!emblaApi2) return;
    emblaApi2.scrollNext();
    setCurr2((prev) => (prev === subImages.length - 1 ? 0 : prev + 1));
  }, [emblaApi2]);

  // onSelect callback’leri
  const onSelect1 = useCallback(() => {
    if (!emblaApi1) return;
    setCurr1(emblaApi1.selectedScrollSnap());
  }, [emblaApi1]);

  const onSelect2 = useCallback(() => {
    if (!emblaApi2) return;
    setCurr2(emblaApi2.selectedScrollSnap());
  }, [emblaApi2]);

  // UseEffects
  useEffect(() => {
    if (!emblaApi1) return;
    emblaApi1.on("select", onSelect1);
    return () => {
      emblaApi1.off("select", onSelect1);
    };
  }, [emblaApi1, onSelect1]);

  useEffect(() => {
    if (!emblaApi2) return;
    emblaApi2.on("select", onSelect2);
    return () => {
      emblaApi2.off("select", onSelect2);
    };
  }, [emblaApi2, onSelect2]);

  return (
    <section className="flex flex-col w-screen h-auto relative items-center justify-center bg-white my-10">
      <h2 className="text-[25px] lg:text-[40px] text-customGray font-lora font-medium leading-normal mb-6 lg:mb-[60px]">
        {header}
      </h2>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full lg:w-[90%]">
        {/* SOLDaki 2. carousel (subImages) */}
        <div className="flex w-auto lg:w-[40%] items-center justify-center lg:gap-[20px]">
          <div className="overflow-hidden relative w-full h-auto" ref={emblaRef2}>
            <div className="flex grid-flow-col">
              {subImages.map((img2, index) => (
                <div
                  className="flex-[0_0_auto] w-full flex justify-center relative group"
                  key={index}
                >
                  <div className="flex flex-col relative z-10">
                    <img
                      className="cursor-pointer overflow-hidden object-cover relative lg:max-h-[463px] w-full xl:max-h-[677px]"
                      height={img2.height}
                      width={img2.width}
                      src={img2.firebaseUrl}
                      alt={`Slide2-${index + 1}`}
                       loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SAĞdaki 1. carousel (images) */}
        <div className="flex flex-col w-[100%] lg:w-[60%] items-center justify-center lg:gap-[30px] text-center gap-10 ">
          <div className="overflow-hidden relative w-full h-auto" ref={emblaRef1}>
            <div className="flex grid-flow-col">
              {images.map((img, index) => (
                <div
                  className="flex-[0_0_auto] w-full flex justify-center relative group"
                  key={index}
                >
                  <div className="flex flex-col relative w-full">
                    <img
                      className="cursor-pointer overflow-hidden object-cover relative lg:max-h-[353px] xl:max-h-[515px]"
                      height={img.height}
                      width={img.width}
                      src={img.firebaseUrl}
                      alt={`Slide1-${index + 1}`}
                       loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-[93%] lg:w-[90%] items-center justify-center gap-[30px] lg:gap-[2.5%]">
            <img src={iconImage.firebaseUrl} width={iconImage.width} height={iconImage.height}  loading="lazy"/>
            <p className="text-[15px] w-[75%] text-black font-monserrat font-normal leading-[22.5px] mb-10 lg:mb-0">
            {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PubBarMainSection;
