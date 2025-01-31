import React from "react";
import YoutubeSvg from "../../svg/YoutubeSvg";
import FacebookSvg from "../../svg/FacebookSvg";
import InstagramSvg from "../../svg/InstagramSvg";
import WkSvg from "../../svg/WkSvg";
import TrivagoSvg from "../../svg/TrivagoSvg";
import Location2Svg from "../../svg/Location2Svg";
import WhatsappSvg from "../../svg/WhatsappSvg";
import FooterLineSvg from "../../svg/FooterLineSvg";

const FooterData = ({ image, image2 }) => {
  return (
    <footer
      className="flex flex-col w-full lg:min-h-[400px] xl:max-h-[490px] bg-center bg-cover relative items-center justify-start"
      style={{ backgroundImage: `url(${image.firebaseUrl})` }}
    >
      <div className="flex absolute inset-0 z-1 bg-black/50 lg:min-h-[400px] w-screen"></div>
      <div className="flex flex-col xl:flex-row w-[95%] lg:w-[100%]  z-10 items-center justify-center text-[#fff] lg:items-center gap-[3%] ">
        <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse w-[95%] xl:w-[48%] items-center justify-around">
          <div className="flex flex-col w-full lg:w-[32%] xl:w-[38%] items-center justify-center gap-[50px]">
            <div className="flex items-center justify-center py-[36.5px] w-full gap-[9%] lg:gap-[10%]">
              <YoutubeSvg
                width={42}
                height={29}
                className="hidden lg:flex"
                color="white"
              />
              <YoutubeSvg
                width={30}
                height={21}
                className="flex lg:hidden"
                color="white"
              />
              <FacebookSvg
                width={19}
                height={38}
                className="hidden lg:flex"
                color="white"
              />
              <FacebookSvg
                width={13.5}
                height={28}
                className="flex lg:hidden"
                color="white"
              />
              <InstagramSvg
                width={35}
                height={35}
                className="hidden lg:flex"
                color="white"
              />
              <InstagramSvg
                width={27}
                height={27}
                className="flex lg:hidden "
                color="white"
              />
              <WkSvg
                width={47}
                height={27}
                className="hidden lg:flex"
                color="white"
              />
              <WkSvg
                width={36}
                height={20.7}
                className="flex lg:hidden"
                color="white"
              />
              <TrivagoSvg
                width={43}
                height={27}
                className="hidden lg:flex"
                color="white"
              />
              <TrivagoSvg
                width={31.5}
                height={19.8}
                className="flex lg:hidden"
                color="white"
              />
            </div>
            <div className="flex lg:hidden h-[1px] w-full bg-[#FFFFFF4D]"></div>
            <img
              src={image2.firebaseUrl}
              alt={image2.altText}
              width={214}
              height={88}
              className="flex lg:hidden mb-[16px] items-center justify-center"
            />
            <img
              src={image2.firebaseUrl}
              alt="logo"
              width={image2.width}
              height={image2.height}
              className="hidden lg:flex items-center justify-center max-h-[110px] max-w-[277px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full lg:w-[46%]">
            <div className="flex items-center justify-center w-[100%] gap-[6%]">
              <Location2Svg width={24} height={38} />
              <p className="font-lora text-[20px] font-medium leading-normal">
                Boğazkent Mevkii <br></br>{" "}
                <span className="font-monserrat text-[15px] leading-normal font-bold">
                  Belek . Antalya . Turkey
                </span>
              </p>
            </div>

            <div className="flex flex-col w-[90%] gap-[30px] mt-[40px] items-center justify-center">
              <button className="flex text-center items-center justify-center py-[14.95px] px-[54.81px] w-[213.27702px] bg-white text-[#233038] font-monserrat text-[14px] font-bold leading-normal hover:bg-transparent hover:text-[#fff] hover:border hover:border-white">
                Reservation
              </button>
              <button className="flex text-center items-center justify-center py-[14.95px] px-[32.64px] w-[213.27702px] bg-transparent text-[#fff] font-monserrat text-[14px] font-semibold leading-normal border border-white  hover:bg-white hover:text-[#233038]">
                +90 (242) 731 07 07
              </button>
              <button className="flex text-center items-center justify-around py-[14.95px] px-[39.86px] w-[213.27702px] bg-transparent text-[#fff] font-monserrat text-[14px] font-semibold leading-normal border border-white  hover:bg-white hover:text-[#233038]">
                <WhatsappSvg width={17.939} height={17.939} color="#fff" />{" "}
                Whatsapp
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-start justify-between lg:justify-around w-[99%] lg:w-[64%] xl:w-[68%] font-monserrat gap-[1%] lg:gap-[6%] my-[44px]">
          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              ACCOMMODATION
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Family Rooms
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              King Suite
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Standard Rooms
            </span>
          </div>

          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start  mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              FOOD & DRINKS
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              A'la Carte
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Bars & Cafes
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Main Restaurant
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Davidoff Cafe
            </span>
          </div>

          <div className="flex flex-col gap-[10px] text-center justify-center items-center xl:items-start  mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              ENTERTAINMENT
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Concert
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Activities
            </span>
          </div>

          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start  mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              KIDS CONCEPT
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Mini A'la Carte
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Aquapark
            </span>
          </div>

          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              MEETING&CONGRESS
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Perge
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Olmypos
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Aspendos
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Thermesos
            </span>
          </div>
          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start mb-7 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              CORPORATE
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Blog
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              KVKK
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Contacts
            </span>
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Fact Sheets
            </span>
          </div>
          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              OFFERS 2023
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Special Offers
            </span>
          </div>
          <div className="flex flex-col gap-[7px] text-center justify-center items-center xl:items-start  mb-6 lg:mb-0">
            <h4 className="uppercase text-[14px] lg:text-[20px] lg:leading-[42px] font-lora font-medium leading-[20px]">
              SPA
            </h4>
            <FooterLineSvg className="flex lg:hidden" width={200} height={1} />
            <span className="text-[13px] lg:text-[15px] font-medium leading-[15px]">
              Indoor Pool
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[1px] bg-white/30 my-[4px] z-10"></div>
      <div className="flex flex-col lg:flex-row w-[96%] z-10 items-center justify-center lg:justify-between mb-[20px] text-[13px] lg:text-[14px] lg:leading-normal text-[#CFCFCF] font-normal leading-[19px]">
        <p className="">Port Nature Resort © Luxury Resort Hotel & SPA </p>
        <p className=" ">Powered by company © DGTLFace</p>
      </div>
    </footer>
  );
};

export default FooterData;
