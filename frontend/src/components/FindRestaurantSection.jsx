import React from 'react'

const FindRestaurantSection = () => {
  return (
    <div className='flex w-full h-auto py-10 justify-center items-center'>
      <div className='flex flex-col w-[75%] justify-center items-start text-start'>
        <h2 className='text-[35px] text-customGray font-medium font-lora leading-normal uppercase'>FIND A'LA CARTE</h2>
        <div className='flex flex-row lg:grid grid-cols-2 gap-5 mt-10'>

            <div className='flex flex-col bg-[#F8F8F8] justify-center items-center p-2 w-full'>
                <img/>
                <div className='flex flex-col text-start items-center w-[98%] text-customGray'>
                    <h3 className='text-[25px]  font-medium font-lora leading-normal pl-1'>ALL DAY DINING A'LA CARTE</h3>
                    <div className='flex w-full items-center justify-between'>
                        <p className='text-[13px] font-normal leading-[20px] font-monserrat'>You can't miss a meal. All day fine dining. We provide delicous food everytime.</p>
                        <button>More About</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-[#F8F8F8] justify-center items-center p-2 w-full'>
                <img/>
                <div className='flex flex-col text-start items-center w-[98%] text-customGray'>
                    <h3 className='text-[25px]  font-medium font-lora leading-normal pl-1'>ALL DAY DINING A'LA CARTE</h3>
                    <div className='flex w-full items-center justify-between'>
                        <p className='text-[13px] font-normal leading-[20px] font-monserrat'>You can't miss a meal. All day fine dining. We provide delicous food everytime.</p>
                        <button>More About</button>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default FindRestaurantSection
