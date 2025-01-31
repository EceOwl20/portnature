import React from "react";

const HomeIconSection = ({ items = [] }) => {
  return (
    <section
      className="flex bg-white w-screen h-auto items-center justify-center"
      aria-labelledby="home-icon-section-heading"
    >
      <h2 id="home-icon-section-heading" className="sr-only">
        Icon Section
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex-row lg:flex w-[80%] md:w-[70%] gap-[10%] items-center justify-center lg:justify-between font-monserrat text-[12px] lg:text-[14px] font-bold leading-normal text-[#000000CC] text-center py-[6%] m-0 p-0 list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col items-center justify-center gap-[10px] ${
              index === items.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <img
              src={item.firebaseUrl}
              className="hidden lg:flex"
              width={item.largeWidth}
              height={item.largeHeight}
              alt={item.text ? item.text : "icon"}
              loading="lazy" 
            />
            <img
              src={item.firebaseUrl}
              className="flex lg:hidden"
              width={item.smallWidth}
              height={item.smallHeight}
              alt={item.text ? item.text : "icon"}
              loading="lazy" 
            />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeIconSection;
