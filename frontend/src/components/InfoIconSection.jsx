import React from "react";

const InfoIconSection = ({items,text}) => {
  return (
    <div className="flex flex-col w-screen h-auto my-12 justify-center items-center ">
      <div className="flex w-[80%] lg:w-[46%] justify-center items-center text-center text-customGray/80">
        <p className="text-[20px] font-bold leading-[30px] font-monserrat">
          {text}
        </p>
      </div>
      <div className="flex w-screen mt-20">
        <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
        <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
      </div>

      <div className="grid grid-cols-3 lg:flex lg:flex-row justify-around items-center w-[95%] lg:w-[85%] text-customGray80 leading-normal text-[12px] lg:text-[14px] font-bold uppercase font-monserrat my-10 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[20px] lg:gap-[36px] justify-center items-center text-center"
          >
            <img src={item.firebaseUrl}  alt="icon" width={item.width} height={item.height}/>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoIconSection;
