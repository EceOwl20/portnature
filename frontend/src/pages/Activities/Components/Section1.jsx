import React from 'react'
import PortNatureActivities from "../Images/PortNatureActivities.png"
import Bardak from "../Icons/Bardak.png"
import Music from "../Icons/Group.png"
import Vector from "../Icons/Vector.png"
import Disco from "../Icons/Frame.png"

const Section1 = ({image,items=[],header, text}) => {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
        <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex flex-col h-[50vh] lg:h-[77vh] w-full items-center justify-end' style={{
            backgroundImage: `
                linear-gradient(to top, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), 
                url(${PortNatureActivities})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='flex flex-col lg:flex-row items-center justify-center w-full pb-5 lg:gap-[23vw]'>
                <h1 className='text-white text-[28px] lg:text-[40px]'>{header} </h1>
                <div className='flex flex-row gap-8 justify-center items-center text-center w-[97%] lg:w-auto'>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center">
                            <img src={Bardak} alt="Free drinks" style={{ width: "39px", height: "50px" }} />                            
                        </div>
                        <p className='text-[13px] mt-2'>{items[0].text}</p>
                    </span>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center ">
                            <img src={Music} alt="Live music" style={{ width: "33px", height: "33px" }} />
                        </div>
                        <p className='text-[13px] mt-2'>{items[1].text}</p>
                    </span>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center ">
                            <img src={Vector} alt="Popular artists" style={{ width: "42px", height: "39px" }} />
                        </div>
                        <p className=' text-[13px] mt-2'>{items[2].text}</p>
                    </span>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center ">
                            <img src={Disco} alt="Disco" style={{ width: "33px", height: "50px" }} />
                        </div>
                        <p className=' text-[13px] mt-2'>{items[3].text}</p>
                    </span>
                </div>
            </div>
        </div>
        <p className='flex items-center justify-center w-[80%] lg:w-5/12 text-center mt-10 lg:mt-24 mb-12 font-monserrat font-bold text-customGray80 text-[15px] lg:text-[20px] leading-6'>
            {text}
        </p>
    </div>
    </div>
  )
}

export default Section1
