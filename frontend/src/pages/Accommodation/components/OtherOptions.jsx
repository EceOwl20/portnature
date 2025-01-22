import React from "react";

const OtherOptions = ({header,text, images=[]}) => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center my-10">
      <div className="flex flex-col w-[90%] text-center justify-center items-center">
        <h3 className="text-[#233038] font-medium font-lora leading-[42px] italic text-[28px]">
          {header}
        </h3>
        <div className="flex w-screen my-5">
          <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
          <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
        </div>
        <p className="text-[20px] text-[#515961] font-bold leading-[30px] font-monserrat">
        {text}
        </p>
      </div>
      <div className="flex w-[100%] h-auto justify-center items-center">
    
      <div className='flex flex-col w-full h-auto justify-center items-center mt-10'>
    <div className='flex flex-col relative justify-end items-end text-end my-[22px] w-[35%] z-50'>
   <img src={images[0].firebaseUrl} alt='img' width={images[0].width} height={images[0].height} className='w-auto flex relative z-50'/>
    <h3 className='text-[25px] uppercase font-medium font-lora leading-normal text-white absolute top-1 left-1 z-50'>King Suite</h3>
    <span className='text-[12px] text-[#ffffff] font-monserrat font-bold leading-[22.5px] absolute bottom-36 left-2 z-50'>5 Adults + 1 ·  110 m²  ·  Sea View
    </span>
     <div className='flex flex-col w-full gap-[17px] my-4 justify-end items-end'>
     <p className='text-[12px] w-[90%] text-black font-monserrat font-normal leading-[18px]'>A luxurious holiday with your loved ones is waiting for you in King Suite</p>
     <button className='flex text-center justify-center items-center py-[13px] w-[150px] text-[14px] leading-normal font-bold font-monserrat bg-white border border-[#868686]'>More About</button>
     </div>
     <div className='flex border border-[#868686] absolute top-10 left-10 bg-transparent z-1 w-[100%] h-[64vh]'>

     </div>
    </div>
    </div>


    <div className='flex flex-col w-full h-auto justify-center items-center mt-10'>
    <div className='flex flex-col relative justify-end items-end text-end my-[22px] w-[35%] z-50'>
   <img src={images[1].firebaseUrl} alt='img' width={images[1].width} height={images[1].height} className='w-auto flex relative z-50'/>

    <h3 className='text-[25px] uppercase font-medium font-lora leading-normal text-white absolute top-1 left-1 z-50'>King Suite</h3>
    <span className='text-[12px] text-[#ffffff] font-monserrat font-bold leading-[22.5px] absolute bottom-36 left-2 z-50'>5 Adults + 1 ·  110 m²  ·  Sea View
    </span>
     <div className='flex flex-col w-full gap-[17px] my-4 justify-end items-end'>
     <p className='text-[12px] w-[90%] text-black font-monserrat font-normal leading-[18px]'>A luxurious holiday with your loved ones is waiting for you in King Suite</p>
     <button className='flex text-center justify-center items-center py-[13px] w-[150px] text-[14px] leading-normal font-bold font-monserrat bg-white border border-[#868686]'>More About</button>
     </div>
     <div className='flex border border-[#868686] absolute top-10 left-10 bg-transparent z-1 w-[100%] h-[64vh]'>

     </div>
    </div>
    </div>



      </div>
    </div>
  );
};

export default OtherOptions;
