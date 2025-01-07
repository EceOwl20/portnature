import React from 'react'
import PortNatureActivities from "../Images/PortNatureActivities.png"
import Bardak from "../Icons/Bardak.png"
import Music from "../Icons/Group.png"
import Vector from "../Icons/Vector.png"
import Disco from "../Icons/Frame.png"

const Section1 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col max-w-[1920px] items-center justify-center w-full'>
        <div className='flex flex-col h-[752px] max-w-[1920px] w-full items-end justify-end' style={{
            backgroundImage: `
                linear-gradient(to top, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), 
                url(${PortNatureActivities})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='flex flex-row items-center justify-center w-full pb-10 gap-96'>
                <h1 className='text-white text-4xl'>ACTIVITIES</h1>
                <div className='flex flex-row gap-8'>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center h-12">
                            <img src={Bardak} alt="Free drinks" style={{ width: "39px", height: "50px" }} />
                        </div>
                        <p className='mt-2'>Free drinks</p>
                    </span>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center h-12">
                            <img src={Music} alt="Live music" style={{ width: "33px", height: "33px" }} />
                        </div>
                        <p className='mt-2'>Live music</p>
                    </span>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center h-12">
                            <img src={Vector} alt="Popular artists" style={{ width: "42px", height: "39px" }} />
                        </div>
                        <p className='mt-2'>Popular artists</p>
                    </span>
                    <span className='text-white flex flex-col items-center'>
                        <div className="flex items-center justify-center h-12">
                            <img src={Disco} alt="Disco" style={{ width: "33px", height: "50px" }} />
                        </div>
                        <p className='mt-2'>Disco</p>
                    </span>
                </div>
            </div>
        </div>
        <p className='flex items-center justify-center w-5/12 text-center mt-12 mb-12 font-monserrat font-bold text-[20px] leading-6'>
            You will recharge yourself with fun games and sports activities  <br/>in company with our professional animation team and you  <br/> will meet with special programs at fitness center
        </p>
    </div>
    </div>
  )
}

export default Section1
