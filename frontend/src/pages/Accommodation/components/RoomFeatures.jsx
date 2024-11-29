import React, {useState} from "react";
import BalconySvg from "../../../svg/room/BalconySvg";
import WCSvg from "../../../svg/room/WCSvg";
import AirConditionerSvg from "../../../svg/room/AirConditionerSvg";
import HotDrinkSvg from "../../../svg/room/HotDrinkSvg";
import DigitalSafeSvg from "../../../svg/room/DigitalSafeSvg";
import LedTvSvg from "../../../svg/room/LedTvSvg";
import TowerSvg from "../../../svg/room/TowelSvg";
import DialPhoneSvg from "../../../svg/room/DialPhoneSvg";
import BroadcastingSvg from "../../../svg/room/BroadcastingSvg";
import MinibarSvg from "../../../svg/room/MinibarSvg";
import TableChairSvg from "../../../svg/room/TableChairSvg";
import MakeupMirrorSvg from "../../../svg/room/MakeupMirrorSvg";
import WifiSvg from "../../../svg/room/WifiSvg";
import ParquetFlooringSvg from "../../../svg/room/ParquetFlooringSvg";
import HairDryerSvg from "../../../svg/room/HairDryerSvg";
import SlippersSvg from "../../../svg/room/SlippersSvg";

const RoomFeatures = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

    const items = [
        { Svg: BalconySvg, width: 39.693, height: 39, text: "Balcony / Terrace" },
        { Svg: WCSvg, width: 55, height: 43, text: "Seperate Shower / WC" },
        { Svg: AirConditionerSvg, width: 40, height: 40, text: "Split-System Air Conditioner" },
        { Svg: HotDrinkSvg, width: 41, height: 44, text: "Hot Drink Set-Up (tea and coffee sets)" },
        { Svg: DigitalSafeSvg, width: 32, height: 43, text: "Digital Safe" },
        { Svg: LedTvSvg, width: 44, height: 36, text: "Led TV" },
        { Svg: TowerSvg, width: 46, height: 37, text: "Towel" },
        { Svg: DialPhoneSvg, width: 43, height: 39, text: "Direct Dial Phone" },
        { Svg: BroadcastingSvg, width: 42, height: 41, text: "Satellite Broadcasting" },
        { Svg: MinibarSvg, width: 44, height: 45, text: "Minibar" },
        { Svg: TableChairSvg, width: 58, height: 38, text: "Table and Chair" },
        { Svg: MakeupMirrorSvg, width: 44, height: 42, text: "Make-up Mirror" },
        { Svg: WifiSvg, width: 38, height: 37, text: "Free Wİ-Fİ internet" },
        { Svg: ParquetFlooringSvg, width: 38, height: 37, text: "Parquet Flooring" },
        { Svg: HairDryerSvg, width: 49, height: 44, text: "Hair Dryer" },
        { Svg: SlippersSvg, width: 49, height: 48, text: "Slippers" },
      ];

      const visibleItems = showMore ? items : items.slice(0, 8);

  return (
    <div className="flex w-screen h-auto my-[20px] lg:my-[40px] items-center justify-center">
      <div className="flex flex-col w-[85%] items-center justify-center text-center">
        <h2 className="text-[25px] lg:text-[28px] italic font-lora text-[#233038] font-medium leading-[34px] lg:leading-[42px]">
          Features
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
            <item.Svg width={item.width} height={item.height} />
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
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

       
      </div>
    </div>
  );
};

export default RoomFeatures;
