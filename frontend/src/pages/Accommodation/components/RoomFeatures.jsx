import React, {useState} from "react";

const RoomFeatures = ({header, items=[], buttonText, buttonText2}) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

      const visibleItems = showMore ? items : items.slice(0, 8);

  return (
    <div className="flex w-screen h-auto my-[20px] lg:my-[40px] items-center justify-center">
      <div className="flex flex-col w-[85%] items-center justify-center text-center">
        <h2 className="text-[25px] lg:text-[28px] italic font-lora text-[#233038] font-medium leading-[34px] lg:leading-[42px]">
        {header}
        </h2>
        <div className="flex w-full mt-4 mb-8">
          <div className="bg-custom-gradient h-[1px] w-[50%]"></div>
          <div className="bg-custom-gradient-reverse h-[1px] w-[50%]"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-start w-full lg:gap-[80px] gap-[40px]">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-3 w-full text-center"
          >
            <img src={item.firebaseUrl} width={item.width} height={item.height} loading="lazy" />
            <span className="text-[#000] text-[15px] font-normal leading-[22.5px] font-monserrat">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      {items.length > 8 && (
        <div className="flex justify-center mt-[40px]">
          <button
            onClick={handleShowMore}
            className="text-[#233038] bg-white border border-[#233038] hover:bg-[#233038] hover:text-white font-medium py-2 px-4 rounded"
          >
            {showMore ? `${buttonText2}` : `${buttonText}`}
          </button>
        </div>
      )}

       
      </div>
    </div>
  );
};

export default RoomFeatures;
