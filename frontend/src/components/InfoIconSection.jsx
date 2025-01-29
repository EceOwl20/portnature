import React from "react";

const InfoIconSection = ({ items, text }) => {
  return (
    <section
      className="flex flex-col w-full max-w-[1920px] mx-auto h-auto my-12 justify-center items-center"
      aria-labelledby="info-section-heading"
    >
      
      <h2 id="info-section-heading" className="sr-only">
        Information Section
      </h2>

      
      <div className="flex w-[80%] lg:w-[46%] justify-center items-center text-center text-customGray/80">
        
        <p className="text-[14px] lg:text-[20px] font-bold leading-[30px] font-monserrat">
          {text}
        </p>
      </div>

      
      <div className="flex w-full mt-8 lg:mt-20">
        <hr className="bg-custom-gradient h-[1px] w-[50%] border-0" />
        <hr className="bg-custom-gradient-reverse h-[1px] w-[50%] border-0" />
      </div>

      
      <ul className="grid grid-cols-3 lg:flex lg:flex-row justify-center items-center w-[95%] lg:w-[85%] text-customGray80 leading-normal text-[12px] lg:text-[14px] font-bold uppercase font-monserrat my-10 gap-14 lg:gap-56">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-[24px] lg:gap-[36px] justify-center items-center text-center list-none"
          >

            <img src={item.firebaseUrl}  alt="icon" width={item.width} height={item.height}/>

            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoIconSection;
